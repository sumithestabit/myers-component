import React from 'react';
import FallbackError from './FallbackError';

class FallbackErrorBoundary extends React.PureComponent {
  state = {
    error: null,
  };

  static getDerivedStateFromError = error => ({
    error,
  });

  render = () => {
    if (this.state.error) {
      return <FallbackError />;
    }

    return this.props.children;
  };
}

export default FallbackErrorBoundary;
