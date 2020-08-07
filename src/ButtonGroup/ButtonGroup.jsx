import React from 'react';
import classNames from 'classnames';
import { getPrefixedClassName, bulmaModifers } from '../utils/bulmaUtil';

class ButtonGroup extends React.PureComponent {
  static defaultProps = {
    className: null,
    alignment: null,
    size: null,
    hasAddons: false,
  };

  render = () => (
    <div
      className={classNames(
        'buttons',
        getPrefixedClassName('is', this.props.alignment),
        getPrefixedClassName('are', this.props.size),
        { [bulmaModifers.hasAddons]: this.props.hasAddons },
        this.props.className,
      )}
    >
      {this.props.children}
    </div>
  );
}

export default ButtonGroup;
