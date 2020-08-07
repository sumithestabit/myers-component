import React from 'react';
import classNames from 'classnames';
import DatePicker from 'react-flatpickr';
import { faTimes, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import CustomField from '../CustomField/CustomField';
import FAIcon from '../FAIcon/FAIcon';
import FormField from '../FormField/FormField';
import Control from '../Control/Control';
import {
  getHasError,
  combineValidators,
  validateDefined,
} from '../utils/formUtil';

class DateTimeField extends React.PureComponent {
  static defaultProps = {
    isRequired: false,
    className: null,
    placeholder: null,
    options: {},
  };

  getDefaultDateFormat = ({ noCalendar, enableTime }) => (
    `${noCalendar ? '' : 'D M j, Y '}${enableTime ? 'h:iK' : ''}`
  );

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
          validateDefined({
            optional: !isRequired,
          }),
          validate,
        )}
        parse={value => value}
        format={value => value}
        render={(fieldRenderProps) => {
          const {
            input: {
              value,
              onChange,
              onFocus,
              onBlur,
            },
            meta,
            className,
            options,
            ...otherProps
          } = fieldRenderProps;

          return (
            <FormField className="has-addons">
              <Control
                className="is-expanded"
                leftIcon={faCalendarAlt}
              >
                <DatePicker
                  {...otherProps}
                  className={classNames('input', className, {
                    'is-danger': getHasError(fieldRenderProps),
                  })}
                  value={value}
                  onChange={values => onChange(values[0])}
                  onOpen={() => onFocus()}
                  onClose={() => onBlur()}
                  options={{
                    dateFormat: this.getDefaultDateFormat(options),
                    ...options,
                  }}
                />
              </Control>
              <Control className="control">
                <Button
                  color="danger"
                  onClick={() => {
                    onFocus();
                    onChange(undefined);
                    onBlur();
                  }}
                >
                  <FAIcon icon={faTimes} />
                </Button>
              </Control>
            </FormField>
          );
        }}
      />
    );
  }
}

export default DateTimeField;
