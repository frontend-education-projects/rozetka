import {} from '@fortawesome/free-solid-svg-icons'

type LinksProps = {
  id: number
  fontIcon: string
  text: string
  path: string
}

type SocialsLinksProps = {
  id: number
  classSoc: string
  socIcon: string
  socPath: string
}

export const sidebarLinks: LinksProps[] = [
  {
    id: 1,
    fontIcon: 'laptop',
    text: "Ноутбуки та комп'ютери",
    path: '/',
  },

  {
    id: 2,
    fontIcon: 'mobile',
    text: 'Смартфони, ТВ і електротехніка',
    path: '/',
  },

  {
    id: 3,
    fontIcon: 'gamepad',
    text: 'Товари для геймерів',
    path: '/',
  },

  {
    id: 4,
    fontIcon: 'tv',
    text: 'Побутова техніка',
    path: '/',
  },

  {
    id: 5,
    fontIcon: 'chair',
    text: 'Товари для дому',
    path: '/',
  },

  {
    id: 6,
    fontIcon: 'screwdriver-wrench',
    text: 'Інструменти та автотовари',
    path: '/',
  },

  {
    id: 7,
    fontIcon: 'bath',
    text: 'Сантехніка та ремонт',
    path: '/',
  },

  {
    id: 8,
    fontIcon: 'worm',
    text: 'Дача, сад і город',
    path: '/',
  },

  {
    id: 9,
    fontIcon: 'baseball-bat-ball',
    text: 'Спорт і захоплення',
    path: '/',
  },

  {
    id: 10,
    fontIcon: 'shirt',
    text: 'Одяг, взуття та прикраси',
    path: '/',
  },

  {
    id: 11,
    fontIcon: 'heart-pulse',
    text: "Краса та здоров'я",
    path: '/',
  },

  {
    id: 12,
    fontIcon: 'robot',
    text: 'Дитячі товари',
    path: '/',
  },

  {
    id: 13,
    fontIcon: 'paw',
    text: 'Зоотовари',
    path: '/',
  },

  {
    id: 14,
    fontIcon: 'paperclip',
    text: 'Офіс, школа, кинги',
    path: '/',
  },

  {
    id: 15,
    fontIcon: 'wine-glass',
    text: 'Алкогольні напої та продукти',
    path: '/',
  },

  {
    id: 16,
    fontIcon: 'briefcase',
    text: 'Товари для бізнесу та послуги',
    path: '/',
  },

  {
    id: 17,
    fontIcon: 'ticket',
    text: 'Підготуйте подарунки до -50%',
    path: '/',
  },
]

export const SocialsLinks: SocialsLinksProps[] = [
  {
    id: 18,
    classSoc: 'facebook',
    socIcon: 'facebook-f',
    socPath: '/',
  },

  {
    id: 19,
    classSoc: 'twitter',
    socIcon: 'twitter',
    socPath: '/',
  },

  {
    id: 20,
    classSoc: 'youtube',
    socIcon: 'youtube',
    socPath: '/',
  },

  {
    id: 21,
    classSoc: 'instagram',
    socIcon: 'instagram',
    socPath: '/',
  },

  {
    id: 22,
    classSoc: 'viber',
    socIcon: 'viber',
    socPath: '/',
  },

  {
    id: 23,
    classSoc: 'telegram',
    socIcon: 'telegram',
    socPath: '/',
  },
]
