# Plagiarism Service Backend

A Node.js/Express backend with MongoDB for the plagiarism service application.

## Features

- **Form Submissions**: Handle form submissions with validation
- **File Uploads**: Support for PDF, DOC, DOCX file uploads
- **Email Notifications**: Automatic email notifications for submissions
- **MongoDB Integration**: Store all data in MongoDB
- **Security**: Rate limiting, CORS, helmet protection
- **RESTful API**: Clean API endpoints

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Edit `.env` with your settings:

```env
# MongoDB (Local or Atlas)
MONGODB_URI=mongodb://localhost:27017/plagiarism_db
# For Atlas: mongodb+srv://username:password@cluster.mongodb.net/plagiarism_db

# Server
PORT=3001
NODE_ENV=production

# Email (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Frontend URL
FRONTEND_URL=https://your-frontend-domain.com
```

### 3. Start the Server

```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### Forms
- `POST /api/forms/submit` - Submit a new form
- `GET /api/forms/:id` - Get specific submission
- `GET /api/forms/user/:email` - Get user's submissions
- `PATCH /api/forms/:id/status` - Update submission status

### Files
- `POST /api/files/upload` - Upload a file
- `GET /api/files/:filename` - Download/serve a file

### Health
- `GET /api/health` - Health check endpoint

## MongoDB Schema

### FormSubmission
```javascript
{
  type: String, // 'plagiarism-report', 'plagiarism-removal', etc.
  email: String,
  fileName: String,
  fileSize: Number,
  fileUrl: String,
  captchaToken: String,
  status: String, // 'pending', 'processing', 'completed', 'failed'
  submittedAt: Date,
  processedAt: Date,
  additionalData: Mixed,
  clientInfo: {
    userAgent: String,
    ipAddress: String,
    timestamp: Date
  }
}
```

## Deployment Options

### 1. Local MongoDB
- Install MongoDB locally
- Use `mongodb://localhost:27017/plagiarism_db`

### 2. MongoDB Atlas (Recommended)
- Create free cluster at mongodb.com
- Get connection string
- Replace MONGODB_URI in .env

### 3. Cloud Deployment
- **Heroku**: Add MongoDB Atlas add-on
- **DigitalOcean App Platform**: Use managed MongoDB
- **AWS/GCP**: Use their MongoDB services
- **Railway**: Deploy with MongoDB Atlas

## Security Features

- Rate limiting (100 requests per 15 minutes)
- CORS protection
- Helmet security headers
- File type validation
- Input validation with Joi
- Environment-based configuration

## Email Configuration

For Gmail:
1. Enable 2-factor authentication
2. Generate an "App Password"
3. Use the app password in EMAIL_PASS

For other providers:
- Update EMAIL_HOST and EMAIL_PORT
- Configure authentication

## File Upload

- Supports: PDF, DOC, DOCX
- Max size: 10MB (configurable)
- Files stored in `uploads/` directory
- Unique filenames to prevent conflicts

## Frontend Integration

Update your frontend's `mongoService.ts`:

```typescript
constructor() {
  this.baseUrl = 'https://your-backend-domain.com/api';
}
```

## Monitoring

- Check health: `GET /api/health`
- Monitor logs for errors
- Use MongoDB Atlas monitoring
- Set up email alerts for failures

## Troubleshooting

### MongoDB Connection Issues
- Check MONGODB_URI format
- Verify network access (Atlas IP whitelist)
- Check username/password

### Email Issues  
- Verify EMAIL_USER and EMAIL_PASS
- Check Gmail app password setup
- Confirm SMTP settings

### File Upload Issues
- Check upload directory permissions
- Verify file size limits
- Check file type restrictions

### CORS Issues
- Update FRONTEND_URL in .env
- Check cors configuration
- Verify origin settings
```