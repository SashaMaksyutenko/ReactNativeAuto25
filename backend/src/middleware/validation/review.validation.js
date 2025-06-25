import { body, validationResult,param } from 'express-validator'
export const validateAddReview = [
  body('carId').isUUID().withMessage('valid car ID is required'),
  body('rating')
    .isFloat({ min: 1, max: 5 })
    .withMessage('rating must be an integer between 1 and 5'),
  body('comment')
    .notEmpty()
    .withMessage('comment is required')
    .isLength({ max: 500 })
    .withMessage('comment must not exceed 500 characters'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
]
export const validateGetReview = [
  param('id').isUUID().withMessage('valid car ID is required'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
]
export const validateDeleteReview = [
  param('id').isUUID().withMessage('valid review ID is required'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
]
