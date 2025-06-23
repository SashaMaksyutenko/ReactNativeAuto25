import { body, validationResult } from 'express-validator'
export const validateBrand = [
  body('name').notEmpty().withMessage('name is required'),
  (req, res, next) => {
    if (!req.files) {
      return res.status(400).json({ error: 'Media file is required' })
    }
    next()
  },
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
]
export const addCarAvailabilityValidation = [
  body('carId').isUUID().withMessage('valid car ID is required'),
  body('startDate').isISO8601().withMessage('valid start date is required'),
  body('endDate').isISO8601().withMessage('valid end date is required'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { startDate, endDate } = req.body
    if (new Date(startDate) >= new Date(endDate)) {
      return res.status(400).json({
        errors: [
          {
            msg: 'startDate must be before endDate',
            param: 'startDate',
            location: 'body'
          }
        ]
      })
    }
    next()
  }
]
