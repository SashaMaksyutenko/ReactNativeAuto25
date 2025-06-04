import { signupService } from '../services/auth.service.js'
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
