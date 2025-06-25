import { prisma } from '../../prisma/client.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const addBookingService = async ( data ) => {
  const {
    userId,
    carId,
    startDate,
    endDate,
    totalPrice,
    paymentStatus,
    bookingStatus,
    name,
    email,
    phone
  } = data
  return await prisma.booking.create({
    data: {
      userId,
      carId,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      totalPrice: totalPrice,
      paymentStatus,
      bookingStatus,
      name,
      email,
      phone
    }
  })
}
