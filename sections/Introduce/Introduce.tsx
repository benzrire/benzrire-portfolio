import React, { FunctionComponent } from 'react';
import styles from './Introduce.module.scss';
import Link from 'next/link';

import Section from '@/layouts/Section/Section';
import classNames from 'classnames';

type Props = {}

const Introduce: FunctionComponent<Props> = ({}) => {

  return (
    <Section className={styles.sectionIntroduce}>
      <p className={styles.hi}>Hey, I'am</p>
      <h1 className={styles.name}>John Doe</h1>
      <p className={styles.description}>
        I'm a software engineer based in Toronto, Canada and also a communication and journalism student. 
        I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. 
        I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience 
        and valuable knowledge from all different kinds of fields throughout my projects/work.
      </p>

      <Link href="#">
        <a className={styles.sayhi}>Say hi <span className={classNames(styles.iconSayHi, 'material-symbols-outlined')}>arrow_forward</span></a>
      </Link>
    </Section>
  );
}

export default Introduce;
