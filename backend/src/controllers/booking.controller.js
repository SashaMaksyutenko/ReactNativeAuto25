import { addBookingService } from '../services/booking.service.js'
import { errorResponse, successResponse } from '../services/response.service.js'
export const addBooking = async (req, res) => {
    const data={
        ...req.body,
        userId: req.userId
    }
  try {
    const booking = await addBookingService(data)
    return successResponse(res, booking, 'booking created successfully')
  } catch (error) {
    return errorResponse(res, error)
  }
}
