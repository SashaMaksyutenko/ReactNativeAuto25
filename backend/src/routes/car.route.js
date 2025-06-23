import express from 'express'
import {
  addBrand,
  addCar,
  addCarAvailability,
  getAllCars
} from '../controllers/car.controller.js'
import upload from '../middleware/upload.js'
import { uploadMedia } from '../controllers/media.controller.js'
import {
  addCarAvailabilityValidation,
  validateBrand
} from '../middleware/validation/car.validation.js'
const router = express.Router()
router.get('/', getAllCars)
router.post(
  '/add-brand',
  upload.array('image', 1),
  validateBrand,
  uploadMedia,
  addBrand
)
router.post('/add-car', upload.array('images', 5), uploadMedia, addCar)
router.post(
  '/add-availability',
  addCarAvailabilityValidation,
  addCarAvailability
)
export default router
