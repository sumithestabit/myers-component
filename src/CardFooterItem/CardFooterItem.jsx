import React from 'react';
import classNames from 'classnames';

class CardFooterItem extends React.PureComponent {
  static defaultProps = {
    className: null,
    children: null,
  };

  render = () => (
    <div className={classNames('card-footer-item', this.props.className)}>
      {this.props.children}
    </div>
  );
}

export default CardFooterItem;
