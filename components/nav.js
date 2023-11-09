import Link from 'next/link';
import { useState } from 'react';
import styles from './nav.module.css';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/#intro" passHref>
          <li onClick={toggleMenu}>intro</li>
        </Link>
        <Link href="/#work" passHref>
          <li onClick={toggleMenu}>work</li>
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
    </nav>
  );
};

export default Navigation;

