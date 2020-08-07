import React from 'react';
import Button from '../Button/Button';
import { withFeedbackContext } from './FeedbackContext';

class FeedbackButton extends React.PureComponent {
  static defaultProps = {
    user: null,
    color: 'info',
    size: 'small',
    isLight: true,
    isRounded: true,
    isOutlined: true,
  };

  componentDidMount = () => {
    if (this.props.user !== null) {
      this.props.feedbackContext.setUser(this.props.user);
    }
  };

  render = () => {
    const {
      feedbackContext,
      user,
      ...props
    } = this.props;
    return (
      <Button {...props} onClick={this.props.feedbackContext.openForm}>
        Have feedback?
      </Button>
    );
  };
}

export default withFeedbackContext(FeedbackButton);
