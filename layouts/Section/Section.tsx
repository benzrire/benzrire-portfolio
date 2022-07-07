import React, { FunctionComponent } from 'react';
import styles from './Section.module.scss';
import classnames from 'classnames';

import { Container } from '@mui/material';

type Props = {
  children: any,
  className?: any,
}

const Section: FunctionComponent<Props> = ({ children, className }) => {

  return (
    <section className={classnames(styles.sectionWrapper, className)}>
      <Container maxWidth="md">
        { children }
      </Container>
    </section>
  );
}

export default Section;
