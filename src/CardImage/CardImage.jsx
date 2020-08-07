import React from 'react';
import classNames from 'classnames';

class CardImage extends React.PureComponent {
  static defaultProps = {
    className: null,
  };

  render = () => (
    <div className={classNames('card-image', this.props.className)}>
      {this.props.children}
    </div>
  );
}

export default CardImage;
