import express from 'express';
import { validateLocation } from '../middleware/validation/location.validation.js';
import { addLocation, getLocations } from '../controllers/location.controller.js';
const router = express.Router();
router.get('/', getLocations);
router.post('/', validateLocation, addLocation);
export default router;
