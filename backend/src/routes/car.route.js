import express from 'express'
import { addCar, getAllCars } from '../controllers/car.controller.js'
import upload from '../middleware/upload.js'
import { uploadMedia } from '../controllers/media.controller.js'
const router = express.Router()
router.get('/', getAllCars)
router.post('/add', upload.array('images', 5), uploadMedia, addCar)
export default router
