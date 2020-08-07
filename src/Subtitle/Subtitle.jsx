import React from 'react';
import classNames from 'classnames';
import { getPrefixedClassName } from '../utils/bulmaUtil';

class Subtitle extends React.PureComponent {
  static defaultProps = {
    className: null,
    size: null,
    isSpaced: false,
  };

  render = () => (
    <div className={classNames(
      'subtitle',
      getPrefixedClassName('is', this.props.size),
      { 'is-spaced': this.props.isSpaced },
      this.props.className,
    )}
    >
      {this.props.children}
    </div>
  );
}

export default Subtitle;
