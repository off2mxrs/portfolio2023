import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './nav.module.css';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    // Close the menu if the click is outside the menu
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Add event listener to the document body when the menu is open
      document.body.addEventListener('click', handleOutsideClick);
    }

    // Remove event listener on component unmount
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.nav}>
      <div className={`${styles.menuIcon} ${styles.hamburgerIcon}`} onClick={toggleMenu}>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
        <div className={styles.hamburgerLine}></div>
      </div>
      <ul ref={menuRef} className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/#intro" passHref>
          <li onClick={toggleMenu}>intro</li>
        </Link>
        <Link href="/#work" passHref>
          <li onClick={toggleMenu}>projects</li>
        </Link>
        <Link href="/#resume" passHref>
          <li onClick={toggleMenu}>resume</li>
        </Link>
        <Link href="/#inspo" passHref>
          <li onClick={toggleMenu}>inspo</li>
        </Link>
        <Link href="/#contact" passHref>
          <li onClick={toggleMenu}>contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;


