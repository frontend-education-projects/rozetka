import clsx from 'clsx'
import React from 'react'

import styles from './CopyrightModalWindow.module.sass'

type CopyrightModalWindowProps = {
  text: string
  content: string
  openCard: boolean
  setOpenCard: React.Dispatch<React.SetStateAction<boolean>>
}

export const CopyrightModalWindow = ({ text, content, openCard, setOpenCard }: CopyrightModalWindowProps) => {
  const handlerCloseCardWindow = () => {
    setOpenCard(false)
  }

  const handlerStopPropagationCardWindow = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const handlerCloseXCardWindow = () => {
    setOpenCard(false)
  }

  return (
    <>
      <div
        className={clsx(styles.modal_holder_cards, styles.animated_cards, openCard ? styles.show_cards : '')}
        onClick={handlerCloseCardWindow}
      >
        <div className={styles.modal_window_cards} onClick={handlerStopPropagationCardWindow}>
          <div className={styles.modal_header_cards}>
            <div className={styles.modal_heading_cards}>{text}</div>
            <button className={styles.modal_close_cards} onClick={handlerCloseXCardWindow}>
              X
            </button>
          </div>
          <div className={styles.modal_content_cards}>
            <p className={styles.modal_content_text}>{content}</p>
          </div>
        </div>
      </div>
    </>
  )
}
