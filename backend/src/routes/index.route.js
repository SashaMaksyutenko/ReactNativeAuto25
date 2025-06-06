import  express from 'express'
import authRoutes from './auth.route.js'
import { authenticate } from '../middleware/authMiddleware.js'
import { getUserController } from '../controllers/user.controller.js'
const router = express.Router()
router.use('/auth',authRoutes)
router.get('/user',authenticate,getUserController)
export default router