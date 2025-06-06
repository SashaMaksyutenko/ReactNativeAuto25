import {prisma} from '../../prisma/client.js'
export const getUserController = async (req, res) => {
  const id = req.userId
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        fullName: true,
        email: true,
        country: true,
        createdAt: true
      }
    })
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({
        message:'User fetched successfully',
        user
    })
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error while fetching user'
    })
  }
}
