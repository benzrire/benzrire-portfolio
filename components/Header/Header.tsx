import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import classnames from 'classnames';

import { Container } from '@mui/material';

type Props = {}

const Header: FunctionComponent<Props> = ({  }) => {

  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    document.querySelector('html')!.style.overflow = isHeaderActive ? 'hidden' : 'auto';
  }, [isHeaderActive]);

  const toggleNavHandler = () => {
    setIsHeaderActive(!isHeaderActive);
  }

  return (
    <header className={classnames(styles.header, (isHeaderActive && styles.active))}>
      <Container maxWidth="lg">
        <div className={styles.headerWrapper}>

          <div className={styles.headerLogo}>
            <span>Suthipong N.</span>
          </div>

          <div className={classnames(styles.headerNavToggle, (isHeaderActive && styles.open))} onClick={toggleNavHandler}>
            <div className={styles.icon}></div>
          </div>

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

        </div>
      </Container>
    </header>
  );
}

export default Header;
