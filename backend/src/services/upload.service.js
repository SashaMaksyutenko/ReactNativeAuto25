import cloudinary from '../config/cloudinary.js'
export const uploadImages = async files => {
  if (!files || files.length === 0) {
    throw new Error('No images uploaded ')
  }
  const uploads = await Promise.all(
    files.map(async file => {
      const result = await cloudinary.uploader.upload(file.path)
      const publicId = result.public_id
      return {
        small: cloudinary.url(publicId, { width: 200, crop: 'fill' }),
        medium: cloudinary.url(publicId, { width: 600, crop: 'fill' }),
        large: cloudinary.url(publicId, { width: 1200, crop: 'fill' })
      }
    })
  )
  return {
    thumbnail: uploads[0],
    gallery: uploads.slice(1)
  }
}
