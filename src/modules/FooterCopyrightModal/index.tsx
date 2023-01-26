import clsx from 'clsx'
import React, { ReactNode } from 'react'

import styles from './CopyrightModalWindow.module.sass'

type CopyrightModalWindowProps = {
  text: string
  children: ReactNode
  openCard: boolean
  setOpenCard: (isOpenCard: boolean) => void
}

export const CopyrightModalWindow = ({ text, children, openCard, setOpenCard }: CopyrightModalWindowProps) => {
  const handleCloseCardWindow = () => {
    setOpenCard(false)
  }

  const handleCloseXCardWindow = () => {
    setOpenCard(false)
  }

  return (
    <>
      <div
        className={clsx(styles.modal_holder_cards, openCard ? styles.show_cards : '')}
        onClick={handleCloseCardWindow}
      ></div>
      <div className={clsx(styles.modal_window_cards, openCard ? styles.show_cards_window : '')}>
        <div className={styles.modal_header_cards}>
          <div className={styles.modal_heading_cards}>{text}</div>
          <button className={styles.modal_close_cards} onClick={handleCloseXCardWindow}>
            X
          </button>
        </div>
        <div className={styles.modal_content_cards}>
          <p className={styles.modal_content_text}>{children}</p>
        </div>
      </div>
    </>
  )
}
