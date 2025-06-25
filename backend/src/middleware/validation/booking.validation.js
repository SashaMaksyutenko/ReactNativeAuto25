import { body, validationResult, param } from 'express-validator'
export const addBookingValidation = [
  body('carId').isUUID().withMessage('valid car ID is required'),
  body('name').notEmpty().withMessage('name is required'),
  body('email').isEmail().withMessage('valid email is required'),
  body('phone')
    .isMobilePhone('any')
    .withMessage('valid phone number is required'),
  body('startDate').isISO8601().withMessage('valid start date is required'),
  body('endDate').isISO8601().withMessage('valid end date is required'),
  body('paymentStatus')
    .isIn(['PAID', 'PENDING'])
    .withMessage('payment status must be one of paid, or pending'),
  body('bookingStatus')
    .isIn(['CONFIRMED', 'CANCELLED', 'PENDING', 'NO_SHOW'])
    .withMessage(
      'booking status must be one of confirmed, cancelled, pending, or no_show'
    ),
  body('totalPrice')
    .isFloat({ gt: 0 })
    .withMessage('total price must be a number'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
]
