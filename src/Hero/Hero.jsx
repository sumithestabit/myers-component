import React from 'react';
import classNames from 'classnames';
import { getPrefixedClassName } from '../utils/bulmaUtil';

class Hero extends React.PureComponent {
  static defaultProps = {
    className: null,
    head: null,
    foot: null,
    color: null,
    size: null,
    isBold: false,
  };

  render = () => (
    <div className={classNames(
      'hero',
      getPrefixedClassName('is', this.props.color),
      getPrefixedClassName('is', this.props.size),
      { 'is-bold': this.props.isBold },
      this.props.className,
    )}
    >
      {this.props.head !== null
        ? <div className="hero-head">{this.props.head}</div>
        : null}
      <div className="hero-body">
        <div className="container">
          {this.props.children}
        </div>
      </div>
      {this.props.foot !== null
        ? <div className="hero-foot">{this.props.foot}</div>
        : null}
    </div>
  )
}

export default Hero;
