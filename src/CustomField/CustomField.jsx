import React from 'react';
import { Field } from 'react-final-form';
import FormField from '../FormField/FormField';
import Label from '../Label/Label';
import Control from '../Control/Control';
import HelpError from '../HelpError/HelpError';

class CustomField extends React.PureComponent {
  static defaultProps = {
    label: null,
    leftIcon: null,
    rightIcon: null,
    hideErrorMessage: false,
  };

  render = () => {
    const {
      name,
      label,
      leftIcon,
      rightIcon,
      hideErrorMessage,
      ...fieldProps
    } = this.props;

    return (
      <FormField>
        {label === null
          ? null
          : <Label name={name}>{label}</Label>}
        <Control
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        >
          <Field
            name={name}
            {...fieldProps}
          />
        </Control>
        {hideErrorMessage
          ? null
          : <HelpError name={name} />}
      </FormField>
    );
  };
}

export default CustomField;
