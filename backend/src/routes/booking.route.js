import express from 'express'
import { addBookingValidation } from '../middleware/validation/booking.validation.js'
import { addBooking } from '../controllers/booking.controller.js'
const router = express.Router()
router.post('/add', addBookingValidation, addBooking)
export default router
