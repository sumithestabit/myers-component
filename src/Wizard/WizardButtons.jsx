import React from 'react';
import { FormSpy } from 'react-final-form';
import classNames from 'classnames';
import { withWizardContext } from './WizardContext';

class WizardButtons extends React.Component {
  getBackButton = (values) => {
    if (!this.props.wizard.hasPrevious()) {
      return null;
    }
    return (
      <p className="control">
        <button
          key="back"
          type="button"
          className="button"
          onClick={() => this.props.wizard.previous(values)}
        >
          Back
        </button>
      </p>
    );
  }

  getNextButton = (values, invalid) => (
    <p className="control">
      <button
        key="next"
        type="button"
        className="button is-info"
        onClick={() => this.props.wizard.next(values)}
        disabled={invalid}
      >
        Next
      </button>
    </p>
  )

  getSkipButton = values => (
    <p className="control">
      <button
        key="skip"
        type="button"
        className="button is-info"
        onClick={() => this.props.wizard.next(values)}
      >
        Skip
      </button>
    </p>
  )

  getSubmitButton = (invalid, submitting) => (
    <p className="control">
      <button
        key="submit"
        type="submit"
        className={classNames(
          'button is-info',
          {
            'is-loading': submitting,
          },
        )}
        disabled={invalid}
      >
        Submit
      </button>
    </p>
  )

  getForwardButton = (values, invalid, submitting) => {
    if (this.props.wizard.hasNext(values)) {
      const shouldRenderSkip = this.props.wizard.canSkip(values);
      return shouldRenderSkip ? this.getSkipButton(values) : this.getNextButton(values, invalid);
    }
    return this.getSubmitButton(invalid, submitting);
  }

  render = () => (
    <FormSpy subcription={{ values: true, invalid: true, submitting: true }}>
      {
        props => (
          <div className="field is-grouped" role="group">
            {this.getBackButton(props.values)}
            {this.getForwardButton(props.values, props.invalid, props.submitting)}
          </div>
        )}
    </FormSpy>
  )
}

export default withWizardContext(WizardButtons);
