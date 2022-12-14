import styles from "@/pages/index.module.sass";
import SideBar from "elements/SideBar/SideBar";
import { sidebarLinks } from "./api/data/sidebarCategoiesMassive";
import React from "react";
import MainSlider from "elements/MainSlider/MainSlider";

export const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.layout_with_sidebar}>
            <div className={styles.sidebar_main}>
              <SideBar sidebarLinks={sidebarLinks} />
            </div>

            <div className={styles.main_content}>
              <MainSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
