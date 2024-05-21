import PropTypes from 'prop-types';
import React from 'react';
// @TODO: Import the `Menu` and `MenuItem` components
import { useNavigate, useMatch } from 'react-router-dom';
import { Menu, MenuItem } from '@dhis2/ui';

const NavigationItem = ({ path, label }) => {
  // browser history object
  const navigate = useNavigate();

  // "null" when not active, "object" when active
  const routeMatch = useMatch(path);
  // If "isActive" is not null and "isActive.isExact" is true
  const isActive = routeMatch?.isExact;

  // Callback called when clicking on the menu item.
  // If the menu item is not active, navigate to the path
  const onClick = () => !isActive && navigate(path);

  // @TODO: Use the `MenuItem` component insteaf of the `span`
  return <MenuItem label={label} active={isActive} onClick={onClick} />;
};

NavigationItem.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export const Navigation = () => (
  // @TODO: Use the `Menu` component instead of the `div`
  <Menu>
    <NavigationItem
      // Menu item for the home page
      label="Home"
      path="/"
    />

    <NavigationItem
      // Menu item for the meta data page
      label="Attributes"
      path="/attributes"
    />

    <NavigationItem
      // Menu item for the Form page
      label="Form"
      path="/form"
    />

    <NavigationItem
      // Menu item for the Form page
      label="OrgUnits"
      path="/orgunits"
    />
  </Menu>
);
