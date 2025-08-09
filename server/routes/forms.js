const express = require('express');
const Joi = require('joi');
const FormSubmission = require('../models/FormSubmission');
const { sendNotificationEmail } = require('../utils/emailService');

const router = express.Router();

// Validation schema
const submitFormSchema = Joi.object({
  type: Joi.string().valid('plagiarism-report', 'plagiarism-removal', 'ai-report', 'drillbit-report').required(),
  email: Joi.string().email().required(),
  fileName: Joi.string().optional(),
  fileSize: Joi.number().optional(),
  captchaToken: Joi.string().required(),
  additionalData: Joi.object().optional()
});

// Submit a new form
router.post('/submit', async (req, res) => {
  try {
    // Validate input
    const { error, value } = submitFormSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: error.details[0].message
      });
    }

    // Create form submission
    const formSubmission = new FormSubmission({
      ...value,
      clientInfo: {
        userAgent: req.get('User-Agent'),
        ipAddress: req.ip || req.connection.remoteAddress,
        timestamp: new Date()
      }
    });

    await formSubmission.save();

    // Send notification email (optional)
    try {
      await sendNotificationEmail(formSubmission);
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      data: {
        id: formSubmission._id,
        type: formSubmission.type,
        email: formSubmission.email,
        status: formSubmission.status,
        submittedAt: formSubmission.submittedAt
      },
      message: 'Form submitted successfully'
    });

  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit form'
    });
  }
});

// Get a specific form submission
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const formSubmission = await FormSubmission.findById(id);
    if (!formSubmission) {
      return res.status(404).json({
        success: false,
        error: 'Form submission not found'
      });
    }

    res.json({
      success: true,
      data: formSubmission
    });

  } catch (error) {
    console.error('Get form submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch form submission'
    });
  }
});

// Get all submissions for a user
router.get('/user/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const { page = 1, limit = 10, status } = req.query;

    const query = { email: email.toLowerCase() };
    if (status) {
      query.status = status;
    }

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { submittedAt: -1 }
    };

    const submissions = await FormSubmission.find(query)
      .sort(options.sort)
      .limit(options.limit * 1)
      .skip((options.page - 1) * options.limit);

    const total = await FormSubmission.countDocuments(query);

    res.json({
      success: true,
      data: submissions,
      pagination: {
        total,
        page: options.page,
        pages: Math.ceil(total / options.limit),
        limit: options.limit
      }
    });

  } catch (error) {
    console.error('Get user submissions error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch user submissions'
    });
  }
});

// Update form submission status (admin endpoint)
router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'processing', 'completed', 'failed'].includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status value'
      });
    }

    const formSubmission = await FormSubmission.findByIdAndUpdate(
      id,
      { 
        status,
        processedAt: status === 'completed' ? new Date() : undefined
      },
      { new: true }
    );

    if (!formSubmission) {
      return res.status(404).json({
        success: false,
        error: 'Form submission not found'
      });
    }

    res.json({
      success: true,
      data: formSubmission,
      message: 'Status updated successfully'
    });

  } catch (error) {
    console.error('Update status error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update status'
    });
  }
});

module.exports = router;