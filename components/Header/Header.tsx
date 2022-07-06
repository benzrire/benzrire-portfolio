import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import classnames from 'classnames';

import { Container } from '@mui/material';

type Props = {}

const Header: FunctionComponent<Props> = ({  }) => {

  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setIsHeaderActive(window.scrollY > 0);
    });
  }, []);

  return (
    <header className={classnames(styles.header, (isHeaderActive && styles.active))}>
      <Container maxWidth="lg">
        <div className={styles.headerWrapper}>
          <div className={styles.headerLogo}>
            <span>Suthipong N.</span>
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
