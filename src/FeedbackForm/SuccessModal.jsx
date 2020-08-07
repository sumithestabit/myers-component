import React from 'react';
import Modal from '../Modal/Modal';
import Title from '../Title/Title';
import { withFeedbackContext } from './FeedbackContext';

class SuccessModal extends React.PureComponent {
  render = () => (
    <Modal
      isActive={this.props.feedbackContext.isSuccessActive}
      close={this.props.feedbackContext.closeSuccessModal}
    >
      <div className="box">
        <Title>Thank you for your feedback! We will review it as soon as we can.</Title>
      </div>
    </Modal>
  );
}

export default withFeedbackContext(SuccessModal);
