import React from 'react';
import classNames from 'classnames';
import { getPrefixedClassName } from '../utils/bulmaUtil';

class Notification extends React.PureComponent {
  static defaultProps = {
    className: null,
    color: null,
  };

  render = () => (
    <div className={classNames(
      'notification',
      getPrefixedClassName('is', this.props.color),
      this.props.className,
    )}
    >
      {this.props.children}
    </div>
  )
}

export default Notification;
