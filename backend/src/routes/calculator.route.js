import { Router } from 'express';
import { calculateSolarPotential } from '../controllers/calculator.controller.js';
import { calculatorLimiter } from '../utils/rateLimiter.js';

const router = Router();

router.route('/calculate').post(calculatorLimiter, calculateSolarPotential);

export default router;
