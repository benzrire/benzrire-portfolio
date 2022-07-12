import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import styles from './ExperienceItem.module.scss';

type Props = {
  title: string,
  date: string,
  companyLabel: string,
  companyLink: string,
  description?: string,
  descriptionList?: Array<string>,
}

const ExperienceItem: FunctionComponent<Props> = ({ title, date, companyLabel, companyLink, description, descriptionList }) => {

  return (
    <div className={styles.experienceItem}>
      <p className={styles.title}>
        {title}

        <span className={styles.date}>{date}</span>
      </p>

      <Link href={companyLink}>
        <a className={styles.companyLink}>{companyLabel}</a>
      </Link>

      {description && <div className={styles.description}>{description}</div>}

      {descriptionList && <ul className={classnames(styles.description, styles.descriptionList)}>{descriptionList.map((item, index) => <li key={`${companyLabel}_${index}`}>{item}</li>)}</ul>}
    </div>
  );
}

export default ExperienceItem;
