import React from 'react';
import { validateString } from '@propalytics-common/field/lib/validator/string';
import CustomField from '../CustomField/CustomField';
import Input from '../Input/Input';
import { combineValidators } from '../utils/formUtil';

class TextField extends React.PureComponent {
  static defaultProps = {
    className: null,
    placeholder: null,
    isRequired: false,
  };

  render = () => {
    const {
      validate,
      isRequired,
      ...fieldProps
    } = this.props;
    return (
      <CustomField
        {...fieldProps}
        validate={combineValidators(
          validateString({
            optional: !isRequired,
          }),
          validate,
        )}
        component={Input}
      />
    );
  }
}

export default TextField;
