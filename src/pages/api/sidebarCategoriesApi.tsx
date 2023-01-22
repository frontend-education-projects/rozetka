/* eslint-disable @typescript-eslint/ban-types */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Імпортуєм обєкт за файлу /data/socials.tsx
import { sidebarLinks } from '@data/SidebarCategoiesMassive'
import type { NextApiRequest, NextApiResponse } from 'next'

//? Функція яка на вході принімає запрос і відповідь
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Модернізація API
  if (req.method === 'GET') {
    //? Результат функції
    res.status(200).json(sidebarLinks)
  }
}
