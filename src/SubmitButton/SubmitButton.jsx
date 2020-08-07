import React from 'react';
import { FormSpy } from 'react-final-form';
import Button from '../Button/Button';

class SubmitButton extends React.PureComponent {
  static defaultProps = {
    children: 'Submit',
  };

  render = () => (
    <FormSpy subscription={{ submitting: true }}>
      {formSpyRenderProps => (
        <Button
          {...this.props}
          isLoading={formSpyRenderProps.submitting}
          onClick={() => formSpyRenderProps.form.submit()}
        >
          {this.props.children}
        </Button>
      )}
    </FormSpy>
  );
}

export default SubmitButton;
