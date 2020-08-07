import React from 'react';

const contextUtil = {
  withContext: Context => Component => props => (
    <Context.Consumer>
      {providedValue => <Component {...providedValue} {...props} />}
    </Context.Consumer>
  ),
};

export default contextUtil;
