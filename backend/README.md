# Backend Documentation

## Overview

The ELECTRO EVSOL backend is a Node.js/Express API server that provides email services, integrations with external APIs, and handles business logic for the solar energy platform.

## Table of Contents

-   [Project Setup](#project-setup)
-   [Architecture](#architecture)
-   [Environment Configuration](#environment-configuration)
-   [API Endpoints](#api-endpoints)
-   [Dependencies](#dependencies)
-   [Development](#development)
-   [Error Handling](#error-handling)
-   [Security](#security)
-   [Deployment](#deployment)

---

## Project Setup

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Starts server with Nodemon auto-reload on file changes. Server runs on `http://localhost:3000`.

### Available Scripts

-   `npm start` - Start development server with auto-reload
-   `npm test` - Run tests (configure as needed)

---

## Architecture

### Tech Stack

-   **Node.js**: JavaScript runtime environment
-   **Express 5**: Web application framework
-   **Nodemailer 7**: Email sending service
-   **Dotenv 17**: Environment variable management
-   **CORS**: Cross-origin resource sharing middleware
-   **Googleapis**: Google API client library
-   **Nodemon**: Development auto-reload utility

### Project Structure

```
backend/
├── src/
│   └── index.js                     # Main server entry point
├── .env                             # Environment variables (gitignored)
├── .env.example                     # Environment variables template
├── .prettierrc                       # Prettier configuration
├── .prettierignore                  # Prettier ignore rules
├── .gitignore                       # Git ignore rules
├── package.json                     # Project dependencies
└── README.md                        # This file
```

### Key Modules

#### Express App

-   Initializes HTTP server
-   Configures middleware (CORS, JSON parsing)
-   Sets up routes

#### Email Service

-   Integrates Nodemailer
-   Handles contact form submissions
-   Manages email templates

#### API Routes

-   RESTful endpoints
-   Request validation
-   Response formatting

---

## Environment Configuration

### Setup `.env` File

Create a `.env` file in the backend directory with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Email Configuration (Gmail)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# API Keys
GOOGLE_API_KEY=your-google-api-key
CONTACT_FORM_RECIPIENT=recipient@example.com

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Additional Configuration
LOG_LEVEL=debug
API_TIMEOUT=30000
```

### Environment Variables Explanation

| Variable                 | Description                  | Example                     |
| ------------------------ | ---------------------------- | --------------------------- |
| `PORT`                   | Server port                  | `3000`                      |
| `NODE_ENV`               | Environment mode             | `development`, `production` |
| `EMAIL_SERVICE`          | Email service provider       | `gmail`                     |
| `EMAIL_USER`             | Sender email address         | `your-email@gmail.com`      |
| `EMAIL_PASS`             | Email service password/token | `app-specific-password`     |
| `GOOGLE_API_KEY`         | Google API key               | `AIzaSy...`                 |
| `CONTACT_FORM_RECIPIENT` | Recipient for contact forms  | `team@company.com`          |
| `FRONTEND_URL`           | Frontend application URL     | `http://localhost:5173`     |

### Gmail App Password Setup

1. Enable 2-Factor Authentication on Google Account
2. Go to [App Passwords](https://myaccount.google.com/apppasswords)
3. Select "Mail" and "Windows Computer"
4. Copy the generated password
5. Use this password as `EMAIL_PASS` in `.env`

---

## API Endpoints

### Base URL

```
http://localhost:3000/api
```

### Health Check

```
GET /health
```

**Response:**

```json
{
    "status": "ok",
    "timestamp": "2026-01-01T00:00:00Z"
}
```

### Contact Form Submission

```
POST /contact
Content-Type: application/json
```

**Request Body:**

```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "123-456-7890",
    "message": "I'm interested in solar solutions",
    "subject": "Solar Inquiry"
}
```

**Response (Success):**

```json
{
    "success": true,
    "message": "Email sent successfully",
    "data": {
        "timestamp": "2026-01-01T00:00:00Z",
        "recipient": "team@company.com"
    }
}
```

**Response (Error):**

```json
{
    "success": false,
    "message": "Error sending email",
    "error": "SMTP error message"
}
```

**Status Codes:**

-   `200` - Success
-   `400` - Bad request (invalid input)
-   `500` - Server error

---

## Dependencies

### Production Dependencies

#### express (v5.2.1)

Fast, unopinionated web framework for Node.js

-   Handles HTTP requests/responses
-   Middleware support
-   Routing system

#### cors (v2.8.5)

Cross-Origin Resource Sharing middleware

-   Enables frontend to make requests to backend
-   Configurable origin, methods, credentials

#### dotenv (v17.2.3)

Environment variable management

-   Loads variables from `.env` file
-   Secures sensitive configuration

#### nodemailer (v7.0.12)

Email service library

-   Sends emails via SMTP
-   Supports templates and attachments
-   Error handling and retries

#### googleapis (v169.0.0)

Google API client library

-   Google Sheets integration
-   Google Drive integration
-   Google Calendar integration

### Dev Dependencies

#### nodemon (v3.1.11)

Development server with auto-reload

-   Watches file changes
-   Automatically restarts server
-   Configurable ignore patterns

---

## Development

### Running the Server

```bash
npm start
```

The server will start on port 3000 and automatically reload on file changes.

### Testing API Endpoints

Using cURL:

```bash
# Health check
curl http://localhost:3000/api/health

# Contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "123-456-7890",
    "message": "Test message",
    "subject": "Test Subject"
  }'
```

Using Postman:

1. Create new POST request
2. URL: `http://localhost:3000/api/contact`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON): Contact form data
5. Send request

### Code Standards

#### Formatting

Run Prettier to format code:

```bash
npx prettier --write src/
```

Prettier config (`.prettierrc`):

-   2-space indentation
-   Trailing commas
-   Single quotes
-   Semicolons required
-   100-character line width

#### Linting

Set up ESLint (optional):

```bash
npm install --save-dev eslint
npx eslint --init
```

### Common Development Tasks

**Add New Endpoint:**

```javascript
// src/routes/newRoute.js
export const newRouteHandler = (req, res) => {
    try {
        // Handle request
        res.json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
```

**Send Email:**

```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient,
    subject: subject,
    html: emailTemplate,
};

await transporter.sendMail(mailOptions);
```

---

## Error Handling

### Error Response Format

```json
{
    "success": false,
    "message": "Human-readable error message",
    "error": "Technical error details",
    "timestamp": "2026-01-01T00:00:00Z"
}
```

### Common Errors

| Error                                 | Cause                | Solution                        |
| ------------------------------------- | -------------------- | ------------------------------- |
| `EMAIL_USER or EMAIL_PASS is missing` | Missing env vars     | Add to `.env` file              |
| `Connection refused`                  | Server not running   | Run `npm start`                 |
| `CORS error`                          | Wrong origin         | Update `FRONTEND_URL` in `.env` |
| `Invalid email format`                | Bad input validation | Validate request body           |
| `SMTP authentication failed`          | Wrong credentials    | Verify Gmail app password       |

### Logging

Add logging for debugging:

```javascript
console.log('Request received:', req.body);
console.error('Error occurred:', error);

// Use log levels
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';
const log = (level, message) => {
    if (shouldLog(level)) {
        console.log(`[${level}] ${message}`);
    }
};
```

---

## Security

### CORS Configuration

```javascript
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
```

### Input Validation

```javascript
const validateContactForm = (body) => {
    if (!body.email || !body.email.includes('@')) {
        throw new Error('Invalid email');
    }
    if (!body.name || body.name.trim().length === 0) {
        throw new Error('Name is required');
    }
    if (!body.message || body.message.trim().length === 0) {
        throw new Error('Message is required');
    }
    return true;
};
```

### Rate Limiting

Install and use `express-rate-limit`:

```bash
npm install express-rate-limit
```

```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

app.post('/api/contact', limiter, contactHandler);
```

### Environment Security

-   Never commit `.env` file
-   Add `.env` to `.gitignore`
-   Use `.env.example` as template
-   Use strong, unique passwords
-   Rotate API keys regularly
-   Use HTTPS in production

---

## Deployment

### Production Checklist

-   [ ] Environment variables configured on hosting platform
-   [ ] CORS origin updated to production frontend URL
-   [ ] Email service credentials validated
-   [ ] Database connections tested (if using)
-   [ ] SSL/TLS certificates installed
-   [ ] Rate limiting implemented
-   [ ] Logging configured
-   [ ] Error monitoring enabled (Sentry, etc.)
-   [ ] API keys rotated
-   [ ] Security headers configured

### Deployment Platforms

#### Vercel

```bash
npm install -g vercel
vercel
```

#### Heroku

```bash
heroku login
heroku create
git push heroku main
```

#### Railway

1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically on push

#### DigitalOcean App Platform

1. Connect repository
2. Configure build and run commands
3. Set environment variables
4. Deploy

### Environment Variables for Production

```env
PORT=3000
NODE_ENV=production
EMAIL_SERVICE=gmail
EMAIL_USER=production-email@company.com
EMAIL_PASS=production-app-password
FRONTEND_URL=https://www.evosalcompany.com
CONTACT_FORM_RECIPIENT=contact@evosalcompany.com
LOG_LEVEL=error
```

### Monitoring and Logging

Set up error tracking:

```javascript
import Sentry from '@sentry/node';

Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV,
});

app.use(Sentry.Handlers.errorHandler());
```

---

## API Integration

### Google Sheets Integration

```javascript
import { google } from 'googleapis';

const sheets = google.sheets('v4');

const appendToSheet = async (spreadsheetId, range, values) => {
    return await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        resource: { values: [values] },
    });
};
```

### Email Templates

```javascript
const emailTemplate = (name, message) => `
  <html>
    <body>
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Message:</strong> ${message}</p>
    </body>
  </html>
`;
```

---

## Troubleshooting

### Server won't start

```bash
# Check if port is in use
lsof -i :3000

# Kill process on port 3000
kill -9 <PID>

# Or use different port
PORT=3001 npm start
```

### Email not sending

-   Verify SMTP credentials
-   Check Gmail app password
-   Ensure 2FA is enabled
-   Verify recipient email is correct
-   Check email service logs

### CORS errors

-   Update `FRONTEND_URL` to match frontend origin
-   Verify credentials: true is set if needed
-   Check allowed headers and methods

### Module not found

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## Resources

-   [Express.js Documentation](https://expressjs.com/)
-   [Nodemailer Documentation](https://nodemailer.com/)
-   [Node.js Best Practices](https://nodejs.org/en/docs/guides/)
-   [REST API Design Guide](https://restfulapi.net/)
-   [Security Best Practices](https://cheatsheetseries.owasp.org/)

---

**Last Updated**: January 1, 2026
**Version**: 1.0.0
