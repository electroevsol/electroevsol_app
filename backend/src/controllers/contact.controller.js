import { appendToSheet } from '../services/sheet.service.js';
import { sendContactEmail } from '../services/email.service.js';

const submitContactForm = async (req, res) => {
    const { fullName, email, phone, service, details } = req.body;

    if (!fullName || !email || !phone) {
        return res.status(400).json({ message: 'Missing required fields.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email address.' });
    }

    if (phone.length < 10) {
        return res.status(400).json({ message: 'Please enter a valid phone number.' });
    }

    try {
        await appendToSheet(req.body);
        sendContactEmail(req.body).catch((error) => console.error('Email failed to send:', error));

        return res.status(200).json({
            success: true,
            message: 'Inquiry received successfully.',
        });
    } catch (error) {
        console.error('Submission Error:', error);

        return res.status(500).json({
            success: false,
            message:
                error instanceof Error
                    ? error.message
                    : 'Failed to process inquiry. Please try again later.',
        });
    }
};

export { submitContactForm };
