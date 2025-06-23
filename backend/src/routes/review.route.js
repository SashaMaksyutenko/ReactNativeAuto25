import express from 'express';
import { validateReview } from '../middleware/validation/review.validation.js';
import { addReview, getReviews } from '../controllers/review.controller.js';
const router = express.Router();
router.get('/:id',getReviews);
router.post('/add',validateReview,addReview);
export default router;
