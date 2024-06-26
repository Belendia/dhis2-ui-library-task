import { Layer, CenteredContent, CircularLoader } from '@dhis2/ui';
import React from 'react';

export const LoadingMask = () => {
  return (
    <Layer translucent>
      <CenteredContent>
        <CircularLoader />
      </CenteredContent>
    </Layer>
  );
};
