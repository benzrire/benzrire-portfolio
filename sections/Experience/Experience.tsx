import React, { FunctionComponent, useEffect } from 'react';
import styles from './Experience.module.scss';

import Section from '@/layouts/Section/Section';
import { Grid } from '@mui/material';
import ExperienceItem from '@/components/ExperienceItem/ExperienceItem';

export interface ExperienceItemProp {
  title: string
  date: string
  companyLabel: string
  companyLink: string
  description: string
  descriptionList: Array<string>
}

type Props = {
  experienceItems?: Array<ExperienceItemProp>
}

const Experience: FunctionComponent<Props> = ({ experienceItems }) => {

  return (
    <Section className={styles.sectionExperience}>
      <Grid container>
        <Grid item xs={12} md={3}>
          <h2 className={styles.header}>EXPERIENCE</h2>
        </Grid>
        <Grid item xs={12} md={9}>

          {
            experienceItems?.length && experienceItems.map((ex: ExperienceItemProp, index: number) => (
              <ExperienceItem 
                key={`${ex.title}_${index}`}
                title={ex.title} 
                date={ex.date}
                companyLabel={ex.companyLabel}
                companyLink={ex.companyLink}
                description={ex.description}
                descriptionList={ex.descriptionList.map((desc: string) => {
                  return desc;
                })}
              />
            ))
          }

        </Grid>
      </Grid>
    </Section>
  );
}

export default Experience;
