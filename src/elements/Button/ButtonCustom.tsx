import React from 'react'

type ButtonCustomProps = {
  ButtonText: string
  Buttontag: keyof JSX.IntrinsicElements
  ButtonClass: string
  ButtonPath?: string
  Shares?: number
  ButtonIcon?: string
  onClick?: () => void
}

export const ButtonCustom = ({
  ButtonText,
  Buttontag,
  ButtonClass,
  ButtonPath,
  Shares,
  ButtonIcon,
  onClick,
}: ButtonCustomProps) => {
  const ButtonTag = Buttontag || 'button'

  return (
    <>
      <div className={ButtonClass}>
        <ButtonTag href={ButtonPath} onClick={onClick}>
          {ButtonText} <div className="shares_number">{Shares}</div>{' '}
          <i className={`fa-solid fa-${ButtonIcon || ''}`}></i>
        </ButtonTag>
      </div>
    </>
  )
}
