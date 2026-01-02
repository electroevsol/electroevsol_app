import { Resend } from 'resend';
import { ENV } from '../config/env.js';
import { getAdminEmailTemplate } from '../templates/email.templates.js';

const resend = new Resend(ENV.RESEND_API_KEY);

export const sendContactEmail = async (data) => {
    const { fullName, email, phone, service, details } = data;

    try {
        const response = await resend.emails.send({
            // IMPORTANT: This must be a verified domain in your Resend dashboard.
            from: 'Contact Form <onboarding@resend.dev>',

            // Where you want to receive the notification
            to: [ENV.OWNER_EMAIL],

            // When you hit "Reply" in your inbox, it will go to the customer
            reply_to: email,

            subject: `🚀 New Inquiry: ${service} from ${fullName}`,
            html: getAdminEmailTemplate(data),
        });

        return response;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
