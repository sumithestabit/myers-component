import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  getIconSize,
  getPrefixedClassName,
} from '../utils/bulmaUtil';

class FAIcon extends React.PureComponent {
  static defaultProps = {
    containerClassName: null,
    iconSize: null,
    size: null,
    color: null,
    fixedWidth: false,
    inverse: false,
    listItem: false,
    rotation: null,
    flip: null,
    border: false,
    pull: null,
  };

  render = () => {
    const {
      containerClassName,
      iconSize,
      size,
      color,
      ...props
    } = this.props;

    return (
      <span className={classNames(
        'icon',
        getPrefixedClassName('is', size),
        getPrefixedClassName('has-text', color),
        containerClassName,
      )}
      >
        <FontAwesomeIcon
          size={iconSize || getIconSize(size)}
          {...props}
        />
      </span>
    );
  }
}

export default FAIcon;
