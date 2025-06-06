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
export const loginService = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('User not found');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  const { password: _, ...userInfo } = user;
  return { user: userInfo, token };
};

