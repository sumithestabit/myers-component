import React from 'react';
import contextUtil from '../utils/contextUtil';

const NavMenuContext = React.createContext(null);
const withNavMenuContext = contextUtil.withContext(NavMenuContext);

export {
  NavMenuContext,
  withNavMenuContext,
};
