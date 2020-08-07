import React from 'react';

const WizardContext = React.createContext(null);

const withWizardContext = Component => props => (
  <WizardContext.Consumer>
    {wizardContextValue => <Component {...props} wizard={wizardContextValue} />}
  </WizardContext.Consumer>
);

export {
  WizardContext,
  withWizardContext,
};
