import { errorResponse, successResponse } from '../services/response.service.js'
import {
  addReviewService,
  deleteReviewService,
  getReviewsService
} from '../services/review.service.js'
export const getReviews = async (req, res) => {
  const data = {
    carId: req.params.id
  }
  try {
    const review = await getReviewsService(data)
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
    const review = await addReviewService(data)
    return successResponse(res, review, 'Review added successfully')
  } catch (error) {
    return errorResponse(res, error)
  }
}
export const deleteReview = async (req, res) => {
  const reviewId = req.params.id
  try {
    const review = await deleteReviewService(reviewId)
    return successResponse(res, review, 'Review deleted successfully')
  } catch (error) {
    if (error.code === 'P2025') {
      return errorResponse(res, `Review with ID ${reviewId} not found`, 404)
    }
    return errorResponse(res, error)
  }
}
