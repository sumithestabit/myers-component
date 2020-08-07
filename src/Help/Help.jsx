import React from 'react';
import classNames from 'classnames';

class Help extends React.PureComponent {
  static defaultProps = {
    className: null,
    children: null,
  };

  render = () => (
    <div className={classNames('help', this.props.className)}>
      {this.props.children}
    </div>
  );
}

export default Help;
