export const successResponse = (
  res,
  data = {},
  message = 'Success',
  status = 200
) => {
  return res.status(status).json({
    success: true,
    message,
    data
  })
}
export const errorResponse = (res, error, status = 500) => {
  console.log('Error:', error)
  const message=typeof error === 'string' ? error : error.message || 'Internal Server Error'
  return res.status(status).json({
    success: true,
    message,
    data
  })
}
