import React, { useReducer } from 'react';
import OPLDrawer from '../components/shared/Drawer';

export default function GenericPage(Page) {
  const [drawerOpen, toggle] = useReducer(drawerOpen => !drawerOpen, false);
  return (
    <OPLDrawer open={drawerOpen} toggle={toggle}>
      <Page/>
    </OPLDrawer>
  );
}