import React from 'react'
import styles from './SideBar.module.sass'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faCircleQuestion, faPaperPlane, faShop} from '@fortawesome/free-solid-svg-icons';
import AuthorSidebar from 'elements/AuthorSidebar/AuthorSidebar';
import ApplicationStore from 'elements/ApplicationStore/ApplicationStore';

type sidebarLinks = {
  sidebarLinks:any
}

type sidebarLinksInfo = {
  id:number
  fontIcon:any
  text:string
  path:string
}

export const SideBar = ({sidebarLinks}:sidebarLinks) => {

  if (!sidebarLinks) {
    return null;
  }

  return (
    <div className={styles.main_page_sidebar}>
      {/* sidebar links products */}
    <div className={styles.sidebar}>
        <div className={styles.sidebar_wrapper}>
        <ul className={styles.sidebar_categories}>
            {sidebarLinks && sidebarLinks.map(({id,fontIcon,text,path}:sidebarLinksInfo) => (
              <li className={styles.sidebar_items} key={id}>
                <Link className={styles.sidebar_links} href={path}>
                  <span className={styles.links_icon} ><FontAwesomeIcon icon={faLaptop}/></span>
                  {text}
                </Link>
              </li>
            ))}
        </ul>
        </div>
    </div>
    {/* Help Links */}
        <Link className={styles.links_help} href='/'>
          <span className={styles.help_icon}><FontAwesomeIcon icon={faCircleQuestion}/></span>
          Довідковий центр
        </Link>

        <Link className={styles.links_help} href='/'>
          <span className={styles.help_icon}><FontAwesomeIcon icon={faPaperPlane}/></span>
          Зв'язатися з нами
        </Link>

        <Link className={styles.links_help} href='/'>
          <span className={styles.help_icon}><FontAwesomeIcon icon={faShop}/></span>
          Точки видачі Rozetka
        </Link>

              {/* author */}
        <div className={styles.auth_wrapper}>
              <AuthorSidebar />
        </div>
              {/* apps */}
        <div className={styles.apps_store}>
              <ApplicationStore />
        </div>
    </div>
  )
}


export default SideBar