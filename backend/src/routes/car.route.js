import express from 'express'
import { addCar, getAllCars } from '../controllers/car.controller.js'
import upload from '../middleware/upload.js'
import { uploadImages } from '../services/upload.service.js'
const router = express.Router()
router.get('/', getAllCars)
router.post('/add', upload.array('images', 5), uploadImages, addCar)
export default router
