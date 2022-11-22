import React from 'react'
import styles from './Catalog.module.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


export const Catalog = () => {
  return (
    <div className={styles.header_catalog}>
        <button className={styles.catalog_btn}>
        <FontAwesomeIcon className={styles.icon_home} icon={faHome} />
            Каталог
            </button>
    </div>
  )
}

export default Catalog
