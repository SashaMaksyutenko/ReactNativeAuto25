import  express from 'express'
import authRoutes from './auth.route.js'
import carRoutes from './car.route.js'
import locationRoutes from './location.route.js'
import reviewRoutes from './review.route.js'
import bookingRoutes from './booking.route.js'
import { authenticate } from '../middleware/authMiddleware.js'
const router = express.Router()
router.use('/auth',authRoutes)
router.use('/cars',authenticate,carRoutes)
router.use('/location',authenticate,locationRoutes)
router.use('/reviews',authenticate,reviewRoutes)
router.use('/booking',authenticate,bookingRoutes)
export default router