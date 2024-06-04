import { useOnlineStatus } from '@dhis2/app-runtime';
import { useSavedObject } from '@dhis2/app-service-datastore';
import { Button } from '@dhis2/ui';
import styles from '../App.module.css';

export const RemoveButton = ({ id }) => {
  const [, { remove }] = useSavedObject(id);
  const { offline } = useOnlineStatus();
  return (
    <span className={styles.removeButton}>
      <Button disabled={offline} dense destructive onClick={() => remove(id)}>
        -
      </Button>
    </span>
  );
};
