import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  data: object;
};

export default async function getContacts(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const prisma = new PrismaClient();
  const contacts = await prisma.contacts.findMany();
  // res.json(contacts)
  res.status(200).json({ data: contacts });
}
