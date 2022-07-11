import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { useTheme } from 'next-themes'
import styles from './Header.module.scss';

import { Container } from '@mui/material';

type Props = {}

const Header: FunctionComponent<Props> = ({  }) => {

  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    document.querySelector('html')!.style.overflow = isHeaderActive ? 'hidden' : 'auto';
  }, [isHeaderActive]);

  const toggleNavHandler = () => {
    setIsHeaderActive(!isHeaderActive);
  }

  const toggleThemeHandler = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  }

  return (
    <header className={classnames(styles.header, (isHeaderActive && styles.active))}>
      <Container maxWidth="lg">
        <div className={styles.headerWrapper}>

          <div className={styles.headerLogo}>
            <span>SN.</span>
          </div>

          <div className={classnames(styles.headerNavToggle, (isHeaderActive && styles.open))} onClick={toggleNavHandler}>
            <div className={styles.icon}></div>
          </div>

          <div className={styles.headerNavWrapper}>
            <ul className={styles.headerNav}>
              <li className={styles.headerNavItem}>
                <Link href='#'>
                  <a>Who am I ?</a>
                </Link>
              </li>
              <li className={styles.headerNavItem}>
                <Link href='#'>
                  <a>Experience</a>
                </Link>
              </li>
              <li className={styles.headerNavItem}>
                <Link href='#'>
                  <a>Projects</a>
                </Link>
              </li>
              <li className={styles.headerNavItem}>
                <Link href='#'>
                  <a>Contact me</a>
                </Link>
              </li>
            </ul>

            <div className={styles.brightnessModeWrapper} onClick={toggleThemeHandler}>
              <span className={classnames(styles.brightnessIcon, "material-symbols-outlined")}>brightness_{ theme == 'dark' ? '7' : '4' }</span>
            </div>
          </div>

        </div>
      </Container>
    </header>
  );
}

export default Header;
