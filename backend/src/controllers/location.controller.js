import { addLocationService, getLocationService } from "../services/location.service.js"
import { errorResponse, successResponse } from '../services/response.service.js'
export const getLocations = async (req, res) => {
  try {
    const locations = await getLocationService()
    return successResponse(res, locations, 'Locations fetched successfully')
  } catch (error) {
    return errorResponse(res, error)
  }
}
export const addLocation = async (req, res) => {
    const data=req.body
  try {
    const location = await addLocationService(data)
    return successResponse(res, location, 'Location created successfully')
  } catch (error) {
    return errorResponse(res, error)
  }
}
