import { prisma } from '../../prisma/client.js'
export const addReviewService = async data => {
  const review = await prisma.reviews.create({
    data
  })
  return review
}
export const getReviewsService = async (data) => {
    const { carId} = data
    const reviews = await prisma.reviews.findMany({
    where: {
      carId,
    },
    include: {
      user: {
        select: {
          fullName: true,
        }
      }
    },
    })
  return reviews
}