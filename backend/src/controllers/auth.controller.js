import { loginService, signupService } from '../services/auth.service.js'
import { errorResponse, successResponse } from '../services/response.service.js'

export const signupController = async (req, res) => {
  try {
    const user = await signupService(req.body)
    const { password, ...userInfo } = user
    return successResponse(res, userInfo, 'User created successfully')
  } catch (error) {
    return errorResponse(res, error)
  }
}
export const loginController = async (req, res) => {
  try {
    const result = await loginService(req.body)
    return successResponse(res, result, 'User logged in successfully')
  } catch (error) {
    return errorResponse(res, error,401)
  }
}
