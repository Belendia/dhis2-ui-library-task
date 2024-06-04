import React, { useState } from 'react';
import { useSavedObjectList } from '@dhis2/app-service-datastore';

import styles from '../App.module.css';
import { AddControl, RemoveButton } from '../components';

export const Objects = () => {
  const [objects, { add }] = useSavedObjectList();

  return (
    <>
      <ul className={styles.list}>
        {objects.map((obj) => (
          <li key={obj.id}>
            {obj.name}
            <RemoveButton id={obj.id} />
          </li>
        ))}
      </ul>
      <AddControl add={add} />
    </>
  );
};
