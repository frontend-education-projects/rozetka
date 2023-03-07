export type ProductInfoProps = {
  id: number
  topSales: string
  imageUrl: string
  imageUrlHover: string
  pathUrl: string
  title: string
  comments_amount: number
  stars: string
  old_price: number
  new_price: number
  currency: string
  deliveryStatus: string
  description: string
  bonus: number
}

export type ProductCardMainInfoProps = {
  id: number
  imageUrl: string
  pathUrl: string
  title: string
  old_price: number
  new_price: number
  currency: string
}

export const ProductInfo: ProductInfoProps[] = [
  {
    id: 36,
    topSales: 'ТОП ПРОДАЖІВ',
    imageUrl: 'https://content2.rozetka.com.ua/goods/images/big_tile/175333147.jpg',
    imageUrlHover: 'https://content1.rozetka.com.ua/goods/images/big_tile/290842123.jpg',
    pathUrl: '/',
    title: 'Ноутбук Acer Aspire 7 A715-42G-R3EZ (NH.QBFEU.00C) Charcoal Black / AMD',
    comments_amount: 30,
    stars: '86%',
    old_price: 40999,
    new_price: 30999,
    currency: '₴',
    bonus: 80,
    deliveryStatus: 'Готовий до відправки',
    description:
      'Екран 15.6" IPS (1920x1080) Full HD, матовий / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / чорний',
  },

  {
    id: 37,
    topSales: 'ТОП ПРОДАЖІВ',
    imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/263944404.jpg',
    imageUrlHover: 'https://content1.rozetka.com.ua/goods/images/big_tile/263944405.jpg',
    pathUrl: '/',
    title: 'Мобільний телефон Samsung Galaxy A23 6/128GB Black (SM-A235FZKKSEK)',
    comments_amount: 38,
    stars: '90%',
    old_price: 9499,
    new_price: 8099,
    currency: '₴',
    bonus: 80,
    deliveryStatus: 'Готовий до відправки',
    description:
      'Екран (6.6", PLS, 2408x1080) / Qualcomm Snapdragon 680 (2.4 ГГц + 1.9 ГГц) / основна квадрокамера: 50 Мп + 5 Мп + 2 Мп + 2 Мп, фронтальна камера 8 Мп / RAM 6 ГБ / 128 ГБ вбудованої пам\'яті + microSD (до 1 ТБ) / 3G / LTE / GPS / підтримка 2х SIM-карт (Nano-SIM) / Android 12 / 5000 мА*год',
  },

  {
    id: 38,
    topSales: 'ТОП ПРОДАЖІВ',
    imageUrl: 'https://content2.rozetka.com.ua/goods/images/big_tile/175333147.jpg',
    imageUrlHover: 'https://content1.rozetka.com.ua/goods/images/big_tile/290842123.jpg',
    pathUrl: '/',
    title: 'Ноутбук Acer Aspire 7 A715-42G-R3EZ (NH.QBFEU.00C) Charcoal Black / AMD',
    comments_amount: 30,
    stars: '86%',
    old_price: 40999,
    new_price: 30999,
    currency: '₴',
    bonus: 80,
    deliveryStatus: 'Готовий до відправки',
    description:
      'Екран 15.6" IPS (1920x1080) Full HD, матовий / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / чорний',
  },

  {
    id: 39,
    topSales: 'ТОП ПРОДАЖІВ',
    imageUrl: 'https://content.rozetka.com.ua/goods/images/big_tile/263944404.jpg',
    imageUrlHover: 'https://content1.rozetka.com.ua/goods/images/big_tile/263944405.jpg',
    pathUrl: '/',
    title: 'Мобільний телефон Samsung Galaxy A23 6/128GB Black (SM-A235FZKKSEK)',
    comments_amount: 38,
    stars: '90%',
    old_price: 9499,
    new_price: 8099,
    currency: '₴',
    bonus: 80,
    deliveryStatus: 'Готовий до відправки',
    description:
      'Екран (6.6", PLS, 2408x1080) / Qualcomm Snapdragon 680 (2.4 ГГц + 1.9 ГГц) / основна квадрокамера: 50 Мп + 5 Мп + 2 Мп + 2 Мп, фронтальна камера 8 Мп / RAM 6 ГБ / 128 ГБ вбудованої пам\'яті + microSD (до 1 ТБ) / 3G / LTE / GPS / підтримка 2х SIM-карт (Nano-SIM) / Android 12 / 5000 мА*год',
  },
]

export const ProductCardMainInfo: ProductCardMainInfoProps[] = [
  {
    id: 40,
    imageUrl: 'https://content.rozetka.com.ua/goods/images/preview/163386254.jpg',
    pathUrl: '/',
    title: 'Ноутбук Acer Aspire 7 A715-42G-R3EZ (NH.QBFEU.00C) Charcoal Black / AMD',
    old_price: 40999,
    new_price: 30999,
    currency: '₴',
  },

  {
    id: 41,
    imageUrl: 'https://content1.rozetka.com.ua/goods/images/preview/263944408.jpg',
    pathUrl: '/',
    title: 'Мобільний телефон Samsung Galaxy A23 6/128GB Black (SM-A235FZKKSEK)',
    old_price: 9499,
    new_price: 8099,
    currency: '₴',
  },

  {
    id: 42,
    imageUrl: 'https://content.rozetka.com.ua/goods/images/preview/163386254.jpg',
    pathUrl: '/',
    title: 'Ноутбук Acer Aspire 7 A715-42G-R3EZ (NH.QBFEU.00C) Charcoal Black / AMD',
    old_price: 40999,
    new_price: 30999,
    currency: '₴',
  },

  {
    id: 43,
    imageUrl: 'https://content1.rozetka.com.ua/goods/images/preview/263944408.jpg',
    pathUrl: '/',
    title: 'Мобільний телефон Samsung Galaxy A23 6/128GB Black (SM-A235FZKKSEK)',
    old_price: 9499,
    new_price: 8099,
    currency: '₴',
  },
]
