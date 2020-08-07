import React from 'react';
import classNames from 'classnames';

class LevelItem extends React.PureComponent {
  static defaultProps = {
    className: null,
    children: null,
  };

  render = () => (
    <div className={classNames(
      'level-item',
      this.props.className,
    )}
    >
      {this.props.children}
    </div>
  )
}

export default LevelItem;
