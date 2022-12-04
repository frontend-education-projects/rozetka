import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

type SocialsLinksProps = {
  SocialsLinks: any;
};

type SocialsLinksInfoProps = {
  id: number;
  classSoc: string;
  socIcon: string;
  socPath: string;
};

const SocialsMain = ({ SocialsLinks }: SocialsLinksProps) => {
  return (
    <div className="socials_sidebar_block">
      <div className="socials_sidebar_heading">Ми в соціальних мережах</div>
      <ul className="socials_list">
        {SocialsLinks.map(
          ({ id, classSoc, socIcon, socPath }: SocialsLinksInfoProps) => (
            <li className="socials_list_item" key={id}>
              <a className={`socials_link socials_${classSoc}`} href={socPath}>
                <i className={`fa-brands fa-${socIcon}`}></i>
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default SocialsMain;
