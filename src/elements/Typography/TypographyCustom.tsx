import React from 'react'

type TypographyCustomProps = {
  typographyText: string
  tag: keyof JSX.IntrinsicElements
}

export const TypographyCustom = ({ typographyText, tag }: TypographyCustomProps) => {
  const Tag = tag || 'h1'

  return (
    <div className="typography">
      <Tag>{typographyText}</Tag>
    </div>
  )
}
