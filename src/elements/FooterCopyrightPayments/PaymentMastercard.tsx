import { CopyrightModalWindow } from '@modules/FooterCopyrightModal'
import Image from 'next/image'
import React, { useState } from 'react'

import styles from './PaymentsCard.module.sass'

export const PaymentMastercard = () => {
  const [openCard, setOpenCard] = useState(false)

  const handleOpenCard = () => {
    setOpenCard(true)
  }
  return (
    <>
      <CopyrightModalWindow openCard={openCard} setOpenCard={setOpenCard} text="MasterCard® SecureCode™">
        MasterCard® SecureCode™ — це технологія, яка забезпечує Вашу картку MasterCard® або Maestro® додатковим
        секретним кодом, що захищає її від несанкціонованого використання під час здійснення покупок в
        інтернет-магазинах, що беруть участь в програмі. Щоб підключити технологію SecureCode, необхідно звернутися в
        банк, що випустив Вашу карту. Ваш секретний код буде відомий тільки Вам і Вашому банку. Далі при кожній оплаті
        покупок або послуг в інтернет-магазинах, що беруть участь в програмі, Ваш банк запропонує Вам ввести даний
        секретний код, який Ви отримаєте на Ваш мобільний телефон, зареєстрований в банку. Тільки після перевірки та
        підтвердження банком даного коду операція з оплати буде проведена. Процедура використання технології SecureCode
        так само проста, як введення PIN-коду в банкоматі. Ввівши правильний SecureCode в процесі покупки, Ви
        підтверджуєте, що є авторизованим власником карти. Якщо ввести неправильний SecureCode, покупка не буде
        здійснена. Навіть якщо комусь відомий номер Вашої платіжної карти, без SecureCode не вдасться оплатити покупку в
        інтернет-магазинах, що беруть участь в програмі.
      </CopyrightModalWindow>
      <li>
        <button className={styles.payments_button} onClick={handleOpenCard}>
          <Image alt="mastercard" height={32} src="/Payments/mastercard-logo.svg" width={72} />
        </button>
      </li>
    </>
  )
}
