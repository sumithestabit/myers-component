import React from 'react';

const FeedbackContext = React.createContext(null);

const withFeedbackContext = Component => props => (
  <FeedbackContext.Consumer>
    {providedValue => <Component {...providedValue} {...props} />}
  </FeedbackContext.Consumer>
);

export {
  FeedbackContext,
  withFeedbackContext,
};
