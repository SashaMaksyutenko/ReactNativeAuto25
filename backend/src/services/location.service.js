import { prisma } from '../../prisma/client.js'
export const getLocationService = async () => {
  const locations = await prisma.location.findMany()
  return locations
}
export const addLocationService = async data => {
  return await prisma.location.create({
    data: {
      city: data.city,
      state: data.state,
      country: data.country,
      latitude: data.latitude,
      longitude: data.longitude,
    }
  })
}
