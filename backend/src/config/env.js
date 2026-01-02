import dotenv from 'dotenv';

dotenv.config({
    path: './.env',
});

export const ENV = {
    PORT: process.env.PORT,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    OWNER_EMAIL: process.env.OWNER_EMAIL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    SPREADSHEET_ID: process.env.SPREADSHEET_ID,
};
