import { Router } from 'express';
import { submitContactForm } from '../controllers/contact.controller.js';
import { contactLimiter } from '../utils/rateLimiter.js';

const router = Router();

router.route('/').post(contactLimiter, submitContactForm);

export default router;
