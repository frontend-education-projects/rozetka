import React, { ReactNode, useState } from 'react'

type accordionProp = {
  accordionTitle: string
  children: ReactNode
}

export const CustomAccordion = ({ accordionTitle, children }: accordionProp) => {
  const [openAccordion, setOpenAccordion] = useState(false)

  const toggleHendler = () => {
    setOpenAccordion(!openAccordion)
  }

  return (
    <div className="footer_sidebar_links">
      <div className="footer_sidebar_heading">
        <div className="footer_sidebar_title">{accordionTitle}</div>
        <button className="button accordion_icon" onClick={toggleHendler}>
          <i aria-expanded={openAccordion} className="accordion_arrow fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <div aria-expanded={!openAccordion} className="accordion_content">
        {children}
      </div>
    </div>
  )
}
