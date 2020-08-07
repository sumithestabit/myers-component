import React from 'react';
import classNames from 'classnames';

class NavDivider extends React.PureComponent {
  static defaultProps = {
    className: null,
  };

  render = () => {
    const { className, ...props } = this.props;
    return (
      <hr
        className={classNames('navbar-divider', className)}
        {...props}
      />
    );
  }
}

export default NavDivider;
