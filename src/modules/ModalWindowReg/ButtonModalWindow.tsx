import React from 'react'

type ButtonModalWindowProps = {
  entry: string
  isValid: boolean
}

export const ButtonModalWindow = ({ entry, isValid }: ButtonModalWindowProps) => {
  return (
    <>
      <button className="button button_auth_modal" disabled={isValid} type="submit">
        {entry}
      </button>
    </>
  )
}
