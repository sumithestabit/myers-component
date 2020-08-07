import React from 'react';
import classNames from 'classnames';

class CardFooter extends React.PureComponent {
  static defaultProps = {
    className: null,
  };

  render = () => (
    <div className={classNames('card-footer', this.props.className)}>
      {this.props.children}
    </div>
  );
}

export default CardFooter;
