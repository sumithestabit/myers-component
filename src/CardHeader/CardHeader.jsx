import React from 'react';
import classNames from 'classnames';

class CardHeader extends React.PureComponent {
  static defaultProps = {
    className: null,
    title: null,
    isTitleCentered: false,
    icon: null,
  };

  render = () => (
    <header className={classNames('card-header', this.props.className)}>
      {this.props.title !== null
        ? (
          <div className={
            classNames(
              'card-header-title',
              { 'is-centered': this.props.isTitleCentered },
            )
          }
          >
            {this.props.title}
          </div>
        )
        : null}
      {this.props.icon !== null
        ? (
          <span className="card-header-icon">
            {this.props.icon}
          </span>
        )
        : null}
    </header>
  );
}

export default CardHeader;
