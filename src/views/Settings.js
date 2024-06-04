import React, { useState } from 'react';
import { useSetting } from '@dhis2/app-service-datastore';
import { Button, Input, Checkbox } from '@dhis2/ui';

import styles from '../App.module.css';
import i18n from '../locales/index.js';

export const Settings = () => {
  const [controlBarRows, { set: setControlBarRows }] =
    useSetting('controlBarRows');
  const [showDescription, { set: setShowDescription }] =
    useSetting('showDescription');

  //   const [controlBarRowsValue, setControlBarRowsValue] =
  //     useState(controlBarRows);

  return (
    <div className={styles.container3}>
      <span className={styles.header}>Control bar rows:</span>
      <div className={styles.formContainer}>
        <Input
          //   disabled={loading}
          value={controlBarRows}
          //   onChange={({ value }) => setControlBarRowsValue(value)}
          onChange={({ value }) => setControlBarRows(value)}
        ></Input>
        {/* <Button onClick={() => setControlBarRows(controlBarRowsValue)}>
          {i18n.t('Add Control Bar Rows')}
        </Button> */}
      </div>
      Stored control bar rows: {controlBarRows}
      <span className={styles.header}>Show description: {showDescription}</span>
      <Checkbox
        checked={showDescription === true}
        label="Checkbox"
        onChange={() => setShowDescription(!showDescription)}
      />
    </div>
  );
};
