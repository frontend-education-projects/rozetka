import React from 'react'

type entryProp = {
  entry: string
  isValid: boolean
}

export const ButtonModalWindow = ({ entry, isValid }: entryProp) => {
  return (
    <>
      <button className="button button_auth_modal" disabled={isValid} type="submit">
        {entry}
      </button>
    </>
  )
}
