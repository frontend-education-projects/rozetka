import styles from '@/pages/index.module.sass'
import SideBar from 'elements/SideBar/SideBar'
import { sidebarLinks } from './api/data/sidebarCategoiesMassive'

export default function Home() {

  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.layout_with_sidebar}>

          <div className={styles.sidebar_main}>
          <SideBar sidebarLinks={sidebarLinks} />
          </div>

          <div className={styles.main_content}>
            
          </div>

        </div>
      </div>
    </div>
    </>
  )
}
