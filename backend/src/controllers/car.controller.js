import { addBrandService, addCarAvailabilityService, addCarService, getAllCarsService } from '../services/car.service.js'
import { errorResponse, successResponse } from '../services/response.service.js'
export const getAllCars = async (req, res) => {
  try {
    const cars = await getAllCarsService()
    return successResponse(res, cars, 'Cars fetched successfully')
  } catch (error) {
    return errorResponse(res, error)
  }
}
export const addCar = async (req, res) => {
  const data = {
    ...req.body,
    userId: req.userId
  }
  try {
    const cars = await addCarService(data)
    return successResponse(res, cars, 'Car added successfully')
  } catch (error) {
    return errorResponse(res, error)
  }
}
export const addBrand = async (req, res) => {
  const data = {
    ...req.body,
  }
  try {
    const brand = await addBrandService(data)
    return successResponse(res, brand, 'Brand added successfully')
  } catch (error) {
    return errorResponse(res, error)
  }
}
export const addCarAvailability = async (req, res) => {
  const data = req.body
  try {
    const carAvailability=await addCarAvailabilityService(data)
    return successResponse(res, carAvailability, 'Car availability added successfully')
  } catch (error) {
    return errorResponse(res, error)
  }
}
