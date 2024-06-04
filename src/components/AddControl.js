import React, { useState } from 'react';
import { Button, Input } from '@dhis2/ui';
import { useAlert, useOnlineStatus } from '@dhis2/app-runtime';
import i18n from '../locales/index.js';

import styles from '../App.module.css';

export const AddControl = ({ add }) => {
  const [newVisName, setNewVisName] = useState('');
  const [loading, setLoading] = useState(false);
  const { show: showEmptyVisError } = useAlert(
    'You must enter a name for the new object',
    {
      duration: 5000,
    }
  );

  const { offline } = useOnlineStatus();

  return (
    <div className={styles.addControl}>
      <Input
        disabled={loading}
        value={newVisName}
        placeholder={i18n.t('New name')}
        onChange={({ value }) => setNewVisName(value)}
      ></Input>
      <Button
        disabled={loading || offline}
        primary
        onClick={() => {
          if (!newVisName.length) {
            showEmptyVisError();
            return;
          }
          setLoading(true);
          add({ name: newVisName }).then(() => {
            setNewVisName('');
            setLoading(false);
          });
        }}
      >
        {i18n.t('Add Object')}
      </Button>
    </div>
  );
};
