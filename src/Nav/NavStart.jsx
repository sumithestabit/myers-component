import React from 'react';
import classNames from 'classnames';

class NavStart extends React.PureComponent {
  static defaultProps = {
    className: null,
  };

  render = () => {
    const { className, ...props } = this.props;
    return (
      <div
        className={classNames('navbar-start', className)}
        {...props}
      />
    );
  };
}

export default NavStart;
