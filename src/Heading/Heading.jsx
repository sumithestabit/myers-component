import React from 'react';
import classNames from 'classnames';

class Heading extends React.PureComponent {
  static defaultProps = {
    className: null,
  };

  render = () => (
    <div className={classNames(
      'heading',
      this.props.className,
    )}
    >
      {this.props.children}
    </div>
  );
}

export default Heading;
