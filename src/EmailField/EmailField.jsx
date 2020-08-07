import React from 'react';
import { validateEmail } from '@propalytics-common/field/lib/validator/email';
import CustomField from '../CustomField/CustomField';
import { combineValidators } from '../utils/formUtil';
import Input from '../Input/Input';

class EmailField extends React.PureComponent {
  static defaultProps = {
    className: null,
    placeholder: null,
    isRequired: false,
  };

  render = () => {
    const {
      isRequired,
      validate,
      ...fieldProps
    } = this.props;
    return (
      <CustomField
        {...fieldProps}
        type="email"
        validate={combineValidators(
          validateEmail({
            optional: !isRequired,
          }),
          validate,
        )}
        component={Input}
      />
    );
  };
}

export default EmailField;
