import React from 'react';
import { Field } from 'react-final-form';
import FormField from '../FormField/FormField';
import Control from '../Control/Control';
import HelpError from '../HelpError/HelpError';

class CheckboxField extends React.PureComponent {
  static defaultProps = {
    label: null,
    validate: undefined,
    initialValue: undefined,
  };

  render = () => (
    <FormField>
      <Control>
        <Field
          type="checkbox"
          name={this.props.name}
          validate={this.props.validate}
          initialValue={this.props.initialValue}
        >
          {fieldRenderProps => (
            <label htmlFor={fieldRenderProps.name} className="checkbox">
              <input
                type="checkbox"
                id={fieldRenderProps.name}
                {...fieldRenderProps.input}
              />
              {' '}
              {this.props.label}
            </label>
          )}
        </Field>
      </Control>
      <HelpError name={this.props.name} />
    </FormField>
  );
}

export default CheckboxField;
