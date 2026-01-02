# ELECTRO EVSOL - Solar Energy Solutions Platform

A modern, full-stack web application for solar energy consulting, calculation, and service delivery. Built with React, Vite, Express.js, and Tailwind CSS.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Development](#development)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🌟 Project Overview

EvoSal is a comprehensive solar energy solutions platform that enables users to:

- Explore solar energy services
- Calculate solar panel requirements and savings
- Learn about company values and expertise
- Contact the team for consultations

The application consists of a modern React frontend and a Node.js/Express backend with email capabilities.

---

## ✨ Features

### Frontend

- **Home Page**: Hero section, services overview, and call-to-action
- **Solar Calculator**: Interactive tool for calculating energy requirements and potential savings
- **Services Page**: Detailed information about solar solutions and implementation process
- **About Page**: Company values, team information, and statistics
- **Contact Page**: Contact form with integrated email and map display
- **Responsive Design**: Mobile-first, works seamlessly on all devices
- **Loading States**: Smooth loading indicators for better UX
- **Navigation**: Sticky navbar with smooth scrolling

### Backend

- **Express Server**: RESTful API for handling requests
- **Email Service**: Send contact form submissions via Nodemailer
- **Google Sheets Integration**: Connect with Google services
- **CORS Support**: Cross-origin resource sharing enabled
- **Environment Configuration**: Secure environment variable handling
- **Error Handling**: Comprehensive error management

---

## 🛠 Tech Stack

### Frontend

- **React 19**: UI library
- **Vite 7**: Build tool and dev server
- **React Router DOM 7**: Client-side routing
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion 12**: Animation library
- **Heroicons**: SVG icon library
- **clsx & tailwind-merge**: Utility classes management

### Backend

- **Node.js**: JavaScript runtime
- **Express 5**: Web framework
- **Nodemailer 7**: Email service
- **Dotenv 17**: Environment variable management
- **CORS**: Cross-origin resource sharing
- **Googleapis**: Google API integration
- **Nodemon**: Development auto-reload

### Development Tools

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Git**: Version control

---

## 📁 Project Structure

```
EvoSal/
├── frontend/                          # React application
│   ├── src/
│   │   ├── components/
│   │   │   ├── about/                # About page components
│   │   │   ├── calculator/           # Solar calculator components
│   │   │   ├── common/               # Shared components
│   │   │   ├── contact/              # Contact page components
│   │   │   ├── home/                 # Home page components
│   │   │   ├── layout/               # Layout components (Navbar, Footer)
│   │   │   ├── services/             # Services page components
│   │   │   └── ui/                   # Reusable UI components
│   │   ├── pages/                    # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── SolarCalculator.jsx
│   │   │   ├── SolarService.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx                   # Main app component
│   │   ├── main.jsx                  # Entry point
│   │   └── index.css                 # Global styles
│   ├── public/                        # Static assets
│   ├── index.html                     # HTML entry point
│   ├── vite.config.js                 # Vite configuration
│   ├── eslint.config.js               # ESLint configuration
│   ├── package.json                   # Frontend dependencies
│   └── README.md                      # Frontend documentation
│
├── backend/                           # Express API server
│   ├── src/
│   │   └── index.js                  # Entry point
│   ├── .env                          # Environment variables (gitignored)
│   ├── .prettierrc                   # Prettier configuration
│   ├── .prettierignore               # Prettier ignore rules
│   ├── .gitignore                    # Git ignore rules
│   ├── package.json                  # Backend dependencies
│   └── README.md                     # Backend documentation
│
└── README.md                          # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Clone Repository

```bash
git clone <repository-url>
cd EvoSal
```

---

## 🎨 Frontend Setup

### Installation

```bash
cd frontend
bun install
```

### Development Server

```bash
bun run dev
```

Opens at `http://localhost:5173` with hot module replacement enabled.

### Build for Production

```bash
bun run build
```

Creates optimized production build in `dist/` directory.

### Preview Production Build

```bash
bun run preview
```

### Linting

```bash
bun run lint
```

Checks code quality with ESLint.

### Project Structure (Frontend)

- **pages/**: Full page components (Home, Calculator, Services, About, Contact)
- **components/**: Reusable components organized by feature
- **styles**: Tailwind CSS with custom theme variables
- **assets**: Images, icons, and static files

---

## 🔧 Backend Setup

### Installation

```bash
cd backend
npm install
```

### Environment Configuration

Create a `.env` file in the backend directory:

```env
PORT=3000
NODE_ENV=development
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
GOOGLE_API_KEY=your-google-api-key
FRONTEND_URL=http://localhost:5173
```

### Development Server

```bash
npm start
```

Starts server with Nodemon auto-reload on file changes. Server runs on `http://localhost:3000`.

### API Endpoints

#### Health Check

```
GET /health
```

#### Contact Form Submission

```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "message": "I'm interested in solar solutions",
  "subject": "Solar Inquiry"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

---

## 💻 Development

### Running Both Frontend and Backend

**Terminal 1 - Backend:**

```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**

```bash
cd frontend
npm run dev
```

### Code Standards

- **Formatting**: Prettier configuration in `.prettierrc`
- **Linting**: ESLint rules in `eslint.config.js`
- **Git Hooks**: Configure pre-commit hooks to run lint/format

### File Naming Conventions

- Components: PascalCase (e.g., `Button.jsx`, `ContactForm.jsx`)
- Utilities: camelCase (e.g., `formatPrice.js`)
- Styles: Component-scoped with Tailwind
- Pages: PascalCase (e.g., `SolarCalculator.jsx`)

---

## 📚 API Documentation

### Frontend-Backend Communication

**Base URL**: `http://localhost:3000/api`

#### Contact Form

- **Endpoint**: `POST /contact`
- **Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "phone": "string",
    "message": "string",
    "subject": "string"
  }
  ```
- **Response**: `{ success: boolean, message: string }`

### CORS Configuration

- **Origin**: Frontend URL configured in backend `.env`
- **Methods**: GET, POST, PUT, DELETE, OPTIONS
- **Credentials**: Allowed

---

## 🚀 Deployment

### Frontend Deployment (Vercel, Netlify, etc.)

```bash
npm run build
# Deploy the dist/ folder
```

### Backend Deployment (Heroku, Railway, etc.)

1. **Set Environment Variables** on hosting platform
2. **Update FRONTEND_URL** to production URL
3. **Configure Email Service** credentials
4. **Deploy** using platform's deployment process

### Production Checklist

- [ ] Environment variables configured
- [ ] CORS origins updated to production URLs
- [ ] Email service credentials validated
- [ ] Database connections tested
- [ ] SSL/TLS certificates installed
- [ ] Rate limiting implemented
- [ ] Logging configured
- [ ] Error monitoring enabled

---

## 🔒 Security Considerations

1. **Environment Variables**: Never commit `.env` files
2. **API Keys**: Keep sensitive data in environment variables
3. **CORS**: Restrict origins to trusted domains
4. **Input Validation**: Validate all user inputs
5. **Rate Limiting**: Implement on production APIs
6. **HTTPS**: Use HTTPS in production
7. **Headers**: Set security headers (CSP, X-Frame-Options, etc.)

---

## 📝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit: `git commit -m "Add feature"`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

### Code Style

- Follow ESLint rules
- Format with Prettier before committing
- Write meaningful commit messages
- Add comments for complex logic

---

## 📧 Contact

For questions or support, please contact the development team or open an issue in the repository.

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 🎯 Roadmap

- [ ] User authentication and accounts
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Database persistence
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] AI-powered recommendations

---

**Last Updated**: January 1, 2026
**Version**: 1.0.0
