import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import React from 'react'

import styles from './Catalog.module.sass'

export const Catalog = () => {
  return (
    <div className={styles.header_catalog}>
      <button className={styles.catalog_btn}>
        <GridViewOutlinedIcon sx={{ fontSize: 30 }} />
        Каталог
      </button>
    </div>
  )
}
