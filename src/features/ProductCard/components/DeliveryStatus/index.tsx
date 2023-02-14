import React from 'react'

import styles from './DeliveryStatus.module.sass'

type DeliveryStatusProp = {
  deliveryStatus: string
}

export const DeliveryStatus = ({ deliveryStatus }: DeliveryStatusProp) => {
  return (
    <div className={styles.delivery_status}>
      {deliveryStatus} <i className="fa-sharp fa-solid fa-truck-fast" />
    </div>
  )
}
