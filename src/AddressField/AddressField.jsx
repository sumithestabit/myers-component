import React from 'react';
import { validateAddress } from '@propalytics-common/field/lib/validator/address';
import CustomField from '../CustomField/CustomField';
import AddressInput from './AddressInput';
import { combineValidators } from '../utils/formUtil';

class AddressField extends React.PureComponent {
  static defaultProps = {
    className: null,
    placeholder: null,
    autocompletionRequest: {},
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
          validateAddress({
            optional: !isRequired,
          }),
          validate,
        )}
        component={AddressInput}
      />
    );
  }
}

export default AddressField;
