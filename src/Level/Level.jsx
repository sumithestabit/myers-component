import React from 'react';
import classNames from 'classnames';

class Level extends React.PureComponent {
  static defaultProps = {
    className: null,
    isMobile: false,
  };

  render = () => (
    <nav className={classNames(
      'level',
      { 'is-mobile': this.props.isMobile },
      this.props.className,
    )}
    >
      {this.props.children}
    </nav>
  )
}

export default Level;
