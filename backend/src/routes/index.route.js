import  express from 'express'
import authRoutes from './auth.route.js'
import carRoutes from './car.route.js'
import { authenticate } from '../middleware/authMiddleware.js'
import { getUserController } from '../controllers/user.controller.js'
const router = express.Router()
router.use('/auth',authRoutes)
router.use('/cars',authenticate,carRoutes)
export default router