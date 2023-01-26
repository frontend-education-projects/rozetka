import { CopyrightModalWindow } from '@modules/FooterCopyrightModal'
import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'

import styles from './PaymentsCard.module.sass'

export const PaymentVisa = () => {
  const [openCard, setOpenCard] = useState(false)

  const handleOpenCard = () => {
    setOpenCard(true)
  }

  return (
    <>
      <CopyrightModalWindow openCard={openCard} setOpenCard={setOpenCard} text="Verified by Visa">
        Платіжні системи в партнерстві з банками-емітентами впроваджують сучасні схеми перевірки особистості власника
        картки, щоб зробити покупки в Інтернеті більш безпечними. Встановлюється спеціальний пароль для кожної операції,
        що здійснюється, і це вселяє в Вас впевненість, що тільки Ви можете робити такі покупки онлайн. Сучасні
        технологічні рішення необхідні для того, щоб власник картки був упевнений в безпеці транзакції і в тому, що він
        має справу зі справжнім (а не «підставним») магазином. Одне з таких технологічних рішень називається Verified by
        Visa («Перевірено Visa»). Verified by Visa — це нова система захисту, яка сповіщає онлайн-торговців, що беруть
        участь в програмі, і банки про те, що Ви є справжнім власником картки, коли Ви робите онлайн-покупки. Вона
        дозволяє використовувати персональний пароль для підтвердження вашої особи і захисту Вашої картки Visa, коли Ви
        використовуєте її в Інтернеті, вселяючи велику впевненість в здійснюваних Вами діях. До технології Verified by
        Visa легко підключитися, її легко використовувати, послуга діє для всіх карток Visa. Для активації послуги
        Verified by Visa для Вашої картки необхідно звернутися в Ваш банк.
      </CopyrightModalWindow>
      <li>
        <button className={clsx(styles.payments_button, styles.payments_space)} onClick={handleOpenCard}>
          <Image alt="mastercard" height={32} src="/Payments/visa-logo.svg" width={72} />
        </button>
      </li>
    </>
  )
}
