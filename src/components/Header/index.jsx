import React from 'react';

import { ReactComponent as PresentIcon } from 'images/present-icon.svg';

import { AppHeader } from './styled';

const Header = () => {
  return (
    <AppHeader>
      <h2>Header</h2>
      <PresentIcon />
    </AppHeader>
  );
};

export default Header;
