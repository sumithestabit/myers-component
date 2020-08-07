import React from 'react';
import { FeedbackContext } from './FeedbackContext';
import FeedbackForm from './FeedbackForm';
import SuccessModal from './SuccessModal';

class FeedbackModalProvider extends React.PureComponent {
  state = {
    isFormActive: false,
    isSuccessActive: false,
    user: null,
  };

  openForm = () => {
    this.setState({
      isFormActive: true,
    });
  };

  closeForm = () => {
    this.setState({
      isFormActive: false,
    });
  };

  openSuccessModal = () => {
    this.setState({
      isSuccessActive: true,
    });
  };

  closeSuccessModal = () => {
    this.setState({
      isSuccessActive: false,
    });
  };

  setUser = (user) => {
    this.setState({
      user,
    });
  };

  render = () => {
    const feedbackContext = {
      user: this.state.user,
      setUser: this.setUser,
      isFormActive: this.state.isFormActive,
      isSuccessActive: this.state.isSuccessActive,
      openForm: this.openForm,
      closeForm: this.closeForm,
      openSuccessModal: this.openSuccessModal,
      closeSuccessModal: this.closeSuccessModal,
    };
    return (
      <FeedbackContext.Provider value={{ feedbackContext }}>
        <FeedbackForm />
        <SuccessModal />
        {this.props.children}
      </FeedbackContext.Provider>
    );
  };
}

export default FeedbackModalProvider;
