import React from 'react';
import { RequestTester, SectionWrapper } from '../components';
import styles from '../App.module.css';

export const PWDVis = () => {
  return (
    <div className={styles.container}>
      <RequestTester />
      <SectionWrapper id={'section-id-01'} />
    </div>
  );
};
