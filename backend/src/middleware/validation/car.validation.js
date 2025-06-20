import { body, validationResult } from 'express-validator'
export const validateBrand = [
  body('name').notEmpty().withMessage('name is required'),
  (req, res, next) => {
    if (!req.files) {
      return res.status(400).json({ error:"Media file is required" })
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
