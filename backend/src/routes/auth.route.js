import express from 'express';
import { loginController, signupController } from '../controllers/auth.controller.js';
import { validateLogin, validateSignup } from '../middleware/validation/auth.validation.js';
const router = express.Router();
router.post('/signup', validateSignup, signupController);
router.post('/login',validateLogin, loginController);
export default router;
