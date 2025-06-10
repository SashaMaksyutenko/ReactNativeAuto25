import { uploadImages } from '../services/upload.service'

export const uploadMedia = async (req, res) => {
  try {
    const media = await uploadImages(req.body)
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
