import React from 'react';
import classNames from 'classnames';
import { getPrefixedClassName } from '../utils/bulmaUtil';

class Title extends React.PureComponent {
  static defaultProps = {
    className: null,
    size: null,
    isSpaced: false,
  };

  render = () => (
    <div className={classNames(
      'title',
      getPrefixedClassName('is', this.props.size),
      { 'is-spaced': this.props.isSpaced },
      this.props.className,
    )}
    >
      {this.props.children}
    </div>
  );
}

export default Title;
