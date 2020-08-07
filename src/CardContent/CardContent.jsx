import React from 'react';
import classNames from 'classnames';

class CardContent extends React.PureComponent {
  static defaultProps = {
    className: null,
  };

  render = () => (
    <div className={classNames('card-content', this.props.className)}>
      {this.props.children}
    </div>
  );
}

export default CardContent;
