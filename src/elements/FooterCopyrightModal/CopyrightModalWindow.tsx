import clsx from 'clsx'
import React from 'react'

import styles from './CopyrightModalWindow.module.sass'

type CopyrightModalWindowProps = {
  text: string
  content: string
  openCard: boolean
  setOpenCard: (isOpenCard: boolean) => void
}

export const CopyrightModalWindow = ({ text, content, openCard, setOpenCard }: CopyrightModalWindowProps) => {
  const handleCloseCardWindow = () => {
    setOpenCard(false)
  }

  const handleStopPropagationCardWindow = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const handleCloseXCardWindow = () => {
    setOpenCard(false)
  }

  return (
    <>
      <div
        className={clsx(styles.modal_holder_cards, styles.animated_cards, openCard ? styles.show_cards : '')}
        onClick={handleCloseCardWindow}
      >
        <div className={styles.modal_window_cards} onClick={handleStopPropagationCardWindow}>
          <div className={styles.modal_header_cards}>
            <div className={styles.modal_heading_cards}>{text}</div>
            <button className={styles.modal_close_cards} onClick={handleCloseXCardWindow}>
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
