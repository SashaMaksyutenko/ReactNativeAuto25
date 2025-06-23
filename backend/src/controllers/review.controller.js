import { errorResponse, successResponse } from "../services/response.service.js"
import { addReviewService, getReviewsService } from "../services/review.service.js"
export const getReviews = async (req, res) => {
  const data={
    carId: req.params.id
  }
  try {
    const review= await getReviewsService(data)
    return successResponse(res, review, 'Reviews fetched successfully')
  } catch (error) {
    return errorResponse(res, error)
  }
}
export const addReview = async (req, res) => {
  const data = {
    ...req.body,
    userId: req.userId
  }
  try {
    const review= await addReviewService(data)
    return successResponse(res, review, 'Review added successfully')
  } catch (error) {
    return errorResponse(res, error)
  }
}