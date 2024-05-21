// @TODO: Import `Table`, `TableBody`, `TableCell`, `TableCellHead`, `TableHead`, `TableRow` & `TableRowHead` from `@dhis2/ui`
import { useDataQuery } from '@dhis2/app-runtime';
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableCellHead,
  TableHead,
  TableRow,
  TableRowHead,
} from '@dhis2/ui';
/**
 * This defined the data that we want to get
 * The `app-runtime` will be explained in a another session after this one,
 * so you don't have to worry about the specifics for now
 */
const ORGUNIT_QUERY = {
  // One query object in the whole query
  orgunits: {
    // The `attributes` endpoint should be used
    resource: 'organisationUnits',
    params: {
      pageSize: 10,
      filter: 'displayName:like$:Zone',
      fields: ['id,name, displayName,code, lastUpdated'],
      order: 'displayName:desc',
    },
  },
};

export const OrgUnits = () => {
  // This is yet another functionality provided by the `@dhis2/app-runtime`
  // For the time being it does not matter what this does exactly
  // * loading will be true while the data is being loaded
  // * error will be an instance of `Error` if something fails
  // * data will be null while the data is being loaded or if something fails
  // * data will be an object once loading is done with the following path
  //   data.attributes.attributes <- That's an array of objects
  const { loading, error, data } = useDataQuery(ORGUNIT_QUERY);

  return (
    <div>
      <h1>Organisation Units</h1>

      {
        // display that the data is being loaded
        // when loading is true
        loading && 'Loading...'
      }

      {
        // display the error message
        // is an error occurred
        error && error.message
      }

      {
        // if there is any data available
        data?.orgunits?.organisationUnits && (
          <Table>
            <TableHead>
              <TableRowHead>
                <TableCellHead>ID</TableCellHead>
                <TableCellHead>Name</TableCellHead>
                <TableCellHead>Display Name</TableCellHead>
                <TableCellHead>Code</TableCellHead>
                <TableCellHead>Last Updated</TableCellHead>
              </TableRowHead>
            </TableHead>
            <TableBody>
              {data.orgunits.organisationUnits.map(
                ({ id, name, displayName, code, lastUpdated }) => (
                  <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{displayName}</TableCell>
                    <TableCell>{code}</TableCell>
                    <TableCell>{lastUpdated}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        )
      }
    </div>
  );
};
