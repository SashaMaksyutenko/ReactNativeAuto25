import express from 'express';
import { validateAddReview, validateDeleteReview, validateGetReview } from '../middleware/validation/review.validation.js';
import { addReview, deleteReview, getReviews } from '../controllers/review.controller.js';
const router = express.Router();
router.get('/car/:id',validateGetReview,getReviews);
router.delete('/:id',validateDeleteReview,deleteReview);
router.post('/add',validateAddReview,addReview);
export default router;
