import { uploadImages } from '../services/upload.service.js'

export const uploadMedia = async (req, res,next) => {
  try {
    const media = await uploadImages(req.files)
    req.body.media = media
    next()
  } catch (error) {
    console.error('Error uploading media:', error)
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
}
