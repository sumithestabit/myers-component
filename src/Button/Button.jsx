import React from 'react';
import classNames from 'classnames';
import { getPrefixedClassName, bulmaModifers } from '../utils/bulmaUtil';

const Button = React.forwardRef(({
  as: Component = 'button',
  className,
  color,
  size,
  isFullWidth,
  isInverted,
  isLight,
  isLoading,
  isOutlined,
  isRounded,
  isSelected,
  isStatic,
  ...props
}, ref) => (
  <Component
    ref={ref}
    className={classNames(
      'button',
      getPrefixedClassName('is', color),
      getPrefixedClassName('is', size),
      {
        [bulmaModifers.isFullWidth]: isFullWidth,
        [bulmaModifers.isInverted]: isInverted,
        [bulmaModifers.isLight]: isLight,
        [bulmaModifers.isLoading]: isLoading,
        [bulmaModifers.isOutlined]: isOutlined,
        [bulmaModifers.isRounded]: isRounded,
        [bulmaModifers.isSelected]: isSelected,
        [bulmaModifers.isStatic]: isStatic,
      },
      className,
    )}
    type="button"
    {...props}
  />
));

export default Button;
