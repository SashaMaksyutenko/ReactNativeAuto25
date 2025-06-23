import { prisma } from '../../prisma/client.js'

export const getAllCarsService = async () => {
  const cars = await prisma.car.findMany({
    include: {
      brand: { select: { id: true, name: true } },
      owner: {
        select: {
          id: true,
          fullName: true,
          email: true
        }
      },
      ownerId: false
    }
  })
  return cars
}
export const addCarService = async data => {
  return await prisma.car.create({
    data: {
      name: data.name,
      subInfo: data.subInfo,
      features: data.features,
      price: parseFloat(data.price),
      media: data.media,
      ownerId: data.userId,
      brandId: data.brandId,
      locationId: data.locationId,
      updatedAt: new Date(),
    }
  })
}
export const addBrandService = async data => {
  return await prisma.brand.create({
    data: {
      name: data.name,
      media: data.media,
    }
  })
}
export const addCarAvailabilityService = async data => {
  return await prisma.car_availability.create({
    data: {
      carId: data.carId,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
    }
  })
}
