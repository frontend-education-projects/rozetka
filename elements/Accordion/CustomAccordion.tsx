import React, { ReactNode, useState } from "react";

type accordionProp = {
  accordionTitle: string;
  children: ReactNode;
};

const CustomAccordion = ({ accordionTitle, children }: accordionProp) => {
  const [openAccordion, setOpenAccordion] = useState(false);

  let toggleHendler = (e: any) => {
    setOpenAccordion(!openAccordion);
  };

  return (
    <div className="footer_sidebar_links">
      <div className="footer_sidebar_heading">
        <div className="footer_sidebar_title">{accordionTitle}</div>
        <button onClick={toggleHendler} className="button accordion_icon">
          <i
            className="accordion_arrow fa-solid fa-chevron-down"
            aria-expanded={openAccordion}
          ></i>
        </button>
      </div>
      <div className="accordion_content" aria-expanded={!openAccordion}>
        {children}
      </div>
    </div>
  );
};

export default CustomAccordion;
