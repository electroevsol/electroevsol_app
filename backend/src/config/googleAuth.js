import { google } from 'googleapis';
import { ENV } from './env.js';

export const getGoogleAuth = () => {
    const auth = new google.auth.GoogleAuth({
        projectId: ENV.GOOGLE_PROJECT_ID,
        credentials: {
            client_email: ENV.GOOGLE_CLIENT_EMAIL,
            private_key: ENV.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    return auth;
};
