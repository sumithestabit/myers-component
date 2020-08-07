import React from 'react';
import { Form as FinalForm } from 'react-final-form';

class Form extends React.PureComponent {
  static defaultProps = {
    children: null,
    initialValues: {},
    validate: undefined,
    validateOnBlur: false,
  };

  render = () => (
    <FinalForm
      onSubmit={this.props.onSubmit}
      initialValues={this.props.initialValues}
      validate={this.props.validate}
      validateOnBlur={this.props.validateOnBlur}
    >
      {formRenderProps => (
        <form onSubmit={formRenderProps.handleSubmit}>
          {this.props.children}
        </form>
      )}
    </FinalForm>
  );
}

export default Form;
