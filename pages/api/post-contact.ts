import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const { type, seeking, email, phone } = req.body
    const prisma = new PrismaClient();
    if (req.method === 'POST') {
        await prisma.contacts.create({
            data: {
                type: type,
                seeking: seeking,
                email: email,
                phone: phone
            }
        })
        res.status(200).json({ message: 'Thanks for your submis' })
    } else {
        res.status(200).json({ message: 'Oups' })
    }
}

