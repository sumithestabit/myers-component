import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Control extends React.PureComponent {
  static defaultProps = {
    className: null,
    children: null,
    leftIcon: null,
    rightIcon: null,
  };

  renderIcon = (icon, direction) => {
    if (icon === null) {
      return null;
    }
    return (
      <span className={classNames('icon', direction)}>
        <FontAwesomeIcon icon={icon} />
      </span>
    );
  };

  render = () => (
    <div
      className={classNames('control', this.props.className, {
        'has-icons-left': this.props.leftIcon !== null,
        'has-icons-right': this.props.rightIcon !== null,
      })}
    >
      {this.props.children}
      {this.renderIcon(this.props.leftIcon, 'is-left')}
      {this.renderIcon(this.props.rightIcon, 'is-right')}
    </div>
  );
}

export default Control;
