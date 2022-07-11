import React, { FunctionComponent } from 'react';
import styles from './Experience.module.scss';
import Link from 'next/link';

import Section from '@/layouts/Section/Section';
import classNames from 'classnames';
import { Grid } from '@mui/material';
import ExperienceItem from '@/components/ExperienceItem/ExperienceItem';

type Props = {}

const Experience: FunctionComponent<Props> = ({}) => {

  return (
    <Section className={styles.sectionExperience}>
      <Grid container>
        <Grid item xs={12} md={3}>
          <h2 className={styles.header}>EXPERIENCE</h2>
        </Grid>
        <Grid item xs={12} md={9}>
          
          <ExperienceItem 
            title={'Frontend Engineer (Remote)'} 
            date={'Jul 2021 - Present'}
            companyLabel={'Selfbook / US - New York'}
            companyLink={'#'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet commodo elit. Mauris eu ultrices arcu, id rhoncus neque. Nulla at enim nisi. Donec a commodo elit, id iaculis.'}
            descriptionList={[
              'Developing screens and UI components for the web application using React and Tailwind.',
              'Fixing UI issues and integrating backend APIs with Redux Saga.'
            ]}
          />

          <ExperienceItem 
            title={'Software Developer (Remote)'} 
            date={'Jun 2021 - Present'}
            companyLabel={'Wevoz / Italy'}
            companyLink={'#'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet commodo elit. Mauris eu ultrices arcu, id rhoncus neque. Nulla at enim nisi. Donec a commodo elit, id iaculis.'}
            descriptionList={[
              'Developing mobile and web applications using React and React Native.',
              'Developing web scraping bots using Python and Selenium.',
              'Helping with PHP backend tasks and occasionally working with different programming languages .',
              'Consulting on frontend tech stack and integrating multiple external API’s across all platforms.'
            ]}
          />

          <ExperienceItem 
            title={'Frontend Engineer (Contractor)'} 
            date={'Mar 2021 - Aug 2021'}
            companyLabel={'FreeBeings'}
            companyLink={'#'}
            descriptionList={[
              'Working on web applications and occasionally leading the development team.',
              'Using React and integrating external APIs with the HIVE blockchain.'
            ]}
          />

          <ExperienceItem 
            title={'Frontend Developer (In Office)'} 
            date={'Feb 2021 - Mar 2021'}
            companyLabel={'TDF / Algeria'}
            companyLink={'#'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet commodo elit. Mauris eu ultrices arcu, id rhoncus neque. Nulla at enim nisi. Donec a commodo elit, id iaculis.'}
          />

        </Grid>
      </Grid>
    </Section>
  );
}

export default Experience;
