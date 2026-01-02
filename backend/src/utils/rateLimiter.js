import rateLimit from 'express-rate-limit';

export const calculatorLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: {
        success: false,
        message: 'Too many calculations requests. Please try again in 15 minutes.',
    },
    standardHeaders: true,
    legacyHeaders: false,
});

export const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 3,
    message: {
        success: false,
        message: 'You have sent too many inquiries. Please wait an hour before sending more.',
    },
    standardHeaders: true,
    legacyHeaders: false,
});
