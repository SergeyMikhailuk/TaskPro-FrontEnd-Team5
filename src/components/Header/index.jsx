import React from 'react';
// import Select from 'react-select';

import user from '../../images/user.png';

import { AppHeader, Wrap, Select, Burger, Info } from './styled';

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'violet', label: 'Violet' },
];

const Header = () => {
  return (
    <AppHeader>
      <Burger />
      <Info>
        <Select options={options} placeholder="Theme" />
        <Wrap>
          <p>Name</p>
          <img src={user} alt="" />
        </Wrap>
      </Info>
    </AppHeader>
  );
};

export default Header;
