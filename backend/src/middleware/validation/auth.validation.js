import { body, validationResult } from 'express-validator'
export const validateSignup = [
  body('fullName').notEmpty().withMessage('full name is required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('password must be at least 6 characters long'),
  body('country').notEmpty().withMessage('country is required'),
  body('phone').notEmpty().withMessage('phone is required'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
]
export const validateLogin = [
  body('email').isEmail().withMessage('Invalid email'),
  body('password')
    .notEmpty()
    .withMessage('password is required'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
]
