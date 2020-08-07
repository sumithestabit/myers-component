import React from 'react';
import classNames from 'classnames';

class NavBurger extends React.PureComponent {
  static defaultProps = {
    className: null,
    onClick: null,
    active: false,
  };

  render = () => (
    <div
      className={classNames(
        'navbar-burger',
        this.props.className,
        { 'is-active': this.props.active },
      )}
      onClick={this.props.onClick}
      onKeyPress={this.props.onClick}
      role="button"
      tabIndex={-1}
    >
      <span />
      <span />
      <span />
    </div>
  );
}

export default NavBurger;
