const mongoose = require('mongoose');

const formSubmissionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['plagiarism-report', 'plagiarism-removal', 'ai-report', 'drillbit-report']
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  fileName: {
    type: String,
    trim: true
  },
  fileSize: {
    type: Number
  },
  fileUrl: {
    type: String,
    trim: true
  },
  captchaToken: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'processing', 'completed', 'failed'],
    default: 'pending'
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  processedAt: {
    type: Date
  },
  additionalData: {
    type: mongoose.Schema.Types.Mixed
  },
  clientInfo: {
    userAgent: String,
    ipAddress: String,
    timestamp: {
      type: Date,
      default: Date.now
    }
  }
}, {
  timestamps: true
});

// Indexes for better query performance
formSubmissionSchema.index({ email: 1, submittedAt: -1 });
formSubmissionSchema.index({ type: 1, status: 1 });
formSubmissionSchema.index({ submittedAt: -1 });

module.exports = mongoose.model('FormSubmission', formSubmissionSchema);