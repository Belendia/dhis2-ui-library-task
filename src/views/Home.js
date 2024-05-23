import React from 'react';
import { useDataQuery } from '@dhis2/app-runtime';
import { CircularLoader, Button } from '@dhis2/ui';
import classes from '../App.module.css';

export const Home = () => {
  const query = {
    me: {
      resource: 'me',
    },
  };

  const { data, loading, fetching, error, refetch } = useDataQuery(query);

  return (
    <div className={classes.container2}>
      {error && <span>{'Error: ' + error.message}</span>}
      {(loading || fetching) && <CircularLoader />}
      {data && !error && <h1>{'Hello, ' + data.me.displayName}</h1>}

      <Button disabled={loading || fetching} onClick={refetch}>
        Reload
      </Button>
    </div>
  );
};
