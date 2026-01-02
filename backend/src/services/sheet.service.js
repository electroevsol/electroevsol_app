import { google } from 'googleapis';
import { getGoogleAuth } from '../config/googleAuth.js';
import { ENV } from '../config/env.js';

export const appendToSheet = async (data) => {
    try {
        const auth = getGoogleAuth();
        const client = await auth.getClient();

        const googleSheets = google.sheets({ version: 'v4', auth: client });

        const { fullName, email, phone, service, details } = data;
        const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

        await googleSheets.spreadsheets.values.append({
            spreadsheetId: ENV.SPREADSHEET_ID,
            range: 'Sheet1!A:F',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[timestamp, fullName, email, phone, service, details]],
            },
        });

        console.log('✅ Data appended to sheet successfully');
    } catch (error) {
        console.error('❌ Google Sheets Error:', error.message);
        if (error.response) console.error(error.response.data);
        throw error;
    }
};
