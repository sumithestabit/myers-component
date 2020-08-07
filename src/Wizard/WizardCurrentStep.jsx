import React from 'react';
import { FormSpy } from 'react-final-form';
import { withWizardContext } from './WizardContext';

const WizardCurrentStep = (props) => {
  const { StepComponent } = props.wizard;
  return (
    <FormSpy subcription={{ values: true }}>
      {spiedProps => <StepComponent values={spiedProps.values} />}
    </FormSpy>
  );
};

export default withWizardContext(WizardCurrentStep);
