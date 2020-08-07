import React from 'react';
import { Field } from 'react-final-form';
import FormField from '../FormField/FormField';
import Label from '../Label/Label';
import Control from '../Control/Control';
import HelpError from '../HelpError/HelpError';

class CheckboxGroupField extends React.PureComponent {
  static defaultProps = {
    label: null,
    validate: undefined,
    initialValue: undefined,
    vertical: false,
  };

  renderCheckbox = ({ label, value }) => (
    <Field
      type="checkbox"
      name={this.props.name}
      validate={this.props.validate}
      value={value}
    >
      {fieldRenderProps => (
        <label htmlFor={fieldRenderProps.name} className="checkbox">
          <input
            type="checkbox"
            id={fieldRenderProps.name}
            {...fieldRenderProps.input}
          />
          {' '}
          {label}
        </label>
      )}
    </Field>
  );

  renderHorizontal = () => (
    <Control>
      {this.props.options.map(option => (
        <React.Fragment key={option.value}>
          {this.renderCheckbox(option)}
          {' '}
        </React.Fragment>
      ))}
    </Control>
  );

  renderVertical = () => (
    this.props.options.map(option => (
      <Control key={option.value}>
        {this.renderCheckbox(option)}
      </Control>
    ))
  );

  render = () => (
    <FormField>
      <Label>{this.props.label}</Label>
      {this.props.vertical
        ? this.renderVertical()
        : this.renderHorizontal()}
      <HelpError name={this.props.name} />
    </FormField>
  );
}
export default CheckboxGroupField;
