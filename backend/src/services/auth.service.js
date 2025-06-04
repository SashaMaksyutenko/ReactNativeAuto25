import { prisma } from '../../prisma/client.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const signupService = async ({
  fullName,
  email,
  password,
  country,
  role = 'USER',
  phone
}) => {
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) throw new Error('Email already exists')
  const hashedPassword = await bcrypt.hash(password, 10)
  return await prisma.user.create({
    data: {
      fullName,
      email,
      password: hashedPassword,
      country,
      role,
      phone
    }
  })
}
