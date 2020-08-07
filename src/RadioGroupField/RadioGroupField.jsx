import React from 'react';
import { Field } from 'react-final-form';
import FormField from '../FormField/FormField';
import Label from '../Label/Label';
import Control from '../Control/Control';
import HelpError from '../HelpError/HelpError';

class RadioGroupField extends React.PureComponent {
  static defaultProps = {
    label: null,
    validate: undefined,
    initialValue: undefined,
    vertical: false,
  };

  renderRadio = ({ label, value }) => (
    <Field
      type="radio"
      name={this.props.name}
      validate={this.props.validate}
      initialValue={this.props.initialValue}
      value={value}
    >
      {fieldRenderProps => (
        <label htmlFor={fieldRenderProps.name} className="radio">
          <input
            type="radio"
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
          {this.renderRadio(option)}
          {' '}
        </React.Fragment>
      ))}
    </Control>
  );

  renderVertical = () => (
    this.props.options.map(option => (
      <Control key={option.value}>
        {this.renderRadio(option)}
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

export default RadioGroupField;
