import styles from "./styles.module.scss";
import Link from "next/link";
import BurgerMenu from "../BurgerMenu";
import { useState } from "react";

const Nav = () => {
  const [openModalBurger, setOpenModalBurger] = useState(false);

  const handleOpenModal = () => {
    setOpenModalBurger(true);
  };

  const handleCloseModal = () => {
    setOpenModalBurger(false);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.boxName}>
        <Link href="/home">
          <a className={styles.name}>Alekxa</a>
        </Link>
      </div>
      <div className={styles.burgerMenu} onClick={handleOpenModal}>
        <div></div>
        <div className={styles.line}></div>
        <div></div>
      </div>
      <BurgerMenu
        handleCloseModal={handleCloseModal}
        isOpen={openModalBurger}
      />
      <div className={styles.box}>
        <div className={styles.list}>
          <Link href="/about">
            <a className={styles.linkNav}>
              Info
              <span className={styles.parrafo}>ABOUT ME</span>
            </a>
          </Link>
        </div>
        <div className={styles.list}>
          <Link href="/projects">
            <a className={styles.linkNav}>
              Work
              <span className={styles.parrafo}>SOME CASES</span>
            </a>
          </Link>
        </div>
        <div className={styles.list}>
          <Link href="/contact">
            <a className={`${styles.contactLink} ${styles.contactButton}`}>
              LET&apos;S TALK
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
