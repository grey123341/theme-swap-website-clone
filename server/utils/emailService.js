const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Send notification email
const sendNotificationEmail = async (formSubmission) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('Email credentials not configured, skipping email notification');
    return;
  }

  try {
    const transporter = createTransporter();

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Form Submission - ${formSubmission.type}`,
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Type:</strong> ${formSubmission.type}</p>
        <p><strong>Email:</strong> ${formSubmission.email}</p>
        <p><strong>File:</strong> ${formSubmission.fileName || 'No file uploaded'}</p>
        <p><strong>Submitted:</strong> ${formSubmission.submittedAt}</p>
        <p><strong>ID:</strong> ${formSubmission._id}</p>
      `
    };

    // Email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: formSubmission.email,
      subject: 'Form Submission Received - Plagiarism Service',
      html: `
        <h2>Thank you for your submission!</h2>
        <p>We have received your ${formSubmission.type} request.</p>
        <p><strong>Submission ID:</strong> ${formSubmission._id}</p>
        <p><strong>Status:</strong> ${formSubmission.status}</p>
        <p>We will process your request and get back to you soon.</p>
        <br>
        <p>Best regards,<br>Plagiarism Service Team</p>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    console.log('Email notifications sent successfully');

  } catch (error) {
    console.error('Email notification error:', error);
    throw error;
  }
};

// Send status update email
const sendStatusUpdateEmail = async (formSubmission) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return;
  }

  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: formSubmission.email,
      subject: `Status Update - ${formSubmission.type}`,
      html: `
        <h2>Status Update</h2>
        <p>Your submission status has been updated.</p>
        <p><strong>Submission ID:</strong> ${formSubmission._id}</p>
        <p><strong>New Status:</strong> ${formSubmission.status}</p>
        <p><strong>Type:</strong> ${formSubmission.type}</p>
        <br>
        <p>Best regards,<br>Plagiarism Service Team</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Status update email sent successfully');

  } catch (error) {
    console.error('Status update email error:', error);
    throw error;
  }
};

module.exports = {
  sendNotificationEmail,
  sendStatusUpdateEmail
};