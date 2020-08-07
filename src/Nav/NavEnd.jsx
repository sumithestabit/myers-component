import React from 'react';
import classNames from 'classnames';

class NavEnd extends React.PureComponent {
  static defaultProps = {
    className: null,
  };

  render = () => {
    const { className, ...props } = this.props;
    return (
      <div
        className={classNames('navbar-end', className)}
        {...props}
      />
    );
  };
}

export default NavEnd;
