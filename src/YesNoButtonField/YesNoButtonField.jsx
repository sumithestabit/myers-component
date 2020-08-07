import React from 'react';
import CustomField from '../CustomField/CustomField';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import { combineValidators } from '../utils/formUtil';

class YesNoButtonField extends React.PureComponent {
  static defaultProps = {
    className: null,
    isRequired: false,
  };

  render = () => {
    const {
      isRequired,
      validate,
    } = this.props;
    return (
      <CustomField
        {...this.props}
        validate={combineValidators(
          value => (isRequired && value === undefined ? 'Required' : undefined),
          validate,
        )}
        render={(fieldRenderProps) => {
          const {
            value,
            onChange,
            onBlur,
            onFocus,
          } = fieldRenderProps.input;
          const isYesSelected = value === true;
          const isNoSelected = value === false;

          return (
            <ButtonGroup hasAddons className={this.props.className}>
              <Button
                color={isYesSelected ? 'info' : null}
                isSelected={isYesSelected}
                onClick={() => {
                  onFocus();
                  onChange(isYesSelected ? undefined : true);
                  onBlur();
                }}
                onBlur={() => onBlur()}
                onFocus={() => onFocus()}
              >
                Yes
              </Button>
              <Button
                color={isNoSelected ? 'danger' : null}
                isSelected={isNoSelected}
                onClick={() => {
                  onFocus();
                  onChange(isNoSelected ? undefined : false);
                  onBlur();
                }}
                onBlur={() => onBlur()}
                onFocus={() => onFocus()}
              >
                No
              </Button>
            </ButtonGroup>
          );
        }}
      />
    );
  }
}

export default YesNoButtonField;
