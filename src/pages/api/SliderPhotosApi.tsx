/* eslint-disable @typescript-eslint/ban-types */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { SliderPhotoMassive } from './data/SliderPhotosMassive'

type Data = {}

//? Функція яка на вході принімає запрос і відповідь
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // Модернізація API
  if (req.method === 'GET') {
    //? Результат функції
    res.status(200).json(SliderPhotoMassive)
  }
}
