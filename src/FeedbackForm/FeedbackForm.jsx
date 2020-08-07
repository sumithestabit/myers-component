import React from 'react';
import { FORM_ERROR } from 'final-form';
import validator from '@propalytics-common/field/lib/validator';
import Form from '../Form/Form';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Modal from '../Modal/Modal';
import TextField from '../TextField/TextField';
import SelectField from '../SelectField/SelectField';
import TextAreaField from '../TextAreaField/TextAreaField';
import SubmitButton from '../SubmitButton/SubmitButton';
import SubmitError from '../SubmitError/SubmitError';
import RatingField from './RatingField';
import AfterSubmitResetter from '../AfterSubmitResetter/AfterSubmitResetter';
import { withFeedbackContext } from './FeedbackContext';
import { tryMutation } from '../utils/feedbackFieldHelpers';

class FeedbackForm extends React.PureComponent {
  onSubmit = async (values) => {
    const mutationSuccess = await tryMutation(values);
    if (mutationSuccess) {
      this.closeForm();
      this.props.feedbackContext.openSuccessModal();
      return undefined;
    }
    return { [FORM_ERROR]: 'Error submitting feedback, please wait a moment and try again.' };
  };

  closeForm = () => {
    this.props.feedbackContext.closeForm();
  };

  render = () => {
    const {
      isFormActive,
      user,
    } = this.props.feedbackContext;
    return (
      <Form
        onSubmit={values => this.onSubmit(values)}
      >
        <AfterSubmitResetter />
        <Modal
          isActive={isFormActive}
          close={this.closeForm}
        >
          <div className="box">
            <RatingField />
            <SelectField
              label="Category"
              name="feedbackCategory"
              options={[
                { label: 'Feedback', value: 'Feedback' },
                { label: 'Issue', value: 'Issue' },
                { label: 'Suggestion', value: 'Suggestion' },
                { label: 'General', value: 'General' },
              ]}
              validate={value => (value === undefined ? 'Required' : undefined)}
              initialValue="Feedback"
            />
            <TextAreaField
              label="Comment"
              name="feedbackComment"
              placeholder="Enter your comment/feedback here"
              validate={value => (
                value !== undefined && value.trim().length > 15
                  ? undefined
                  : 'Comment must be longer than 15 characters'
              )}
            />
            <TextField
              label="Email"
              name="feedbackEmail"
              placeholder="Your email address (optional)"
              validate={validator.validateEmail({ optional: true })}
              initialValue={
                (user !== null && user.email !== undefined)
                  ? user.email
                  : undefined
              }
            />
            <SubmitError />
            <ButtonGroup>
              <SubmitButton color="info" />
              <Button onClick={this.closeForm}>Cancel</Button>
            </ButtonGroup>
          </div>
        </Modal>
      </Form>
    );
  };
}

export default withFeedbackContext(FeedbackForm);
