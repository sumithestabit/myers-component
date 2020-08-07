import React from 'react';
import classNames from 'classnames';

class Card extends React.PureComponent {
  static defaultProps = {
    className: null,
  };

  render = () => (
    <div className={classNames('card', this.props.className)}>
      {this.props.children}
    </div>
  );
}

export default Card;
