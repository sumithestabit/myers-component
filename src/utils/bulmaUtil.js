const getPrefixedClassName = (prefix, modifier) => (
  modifier !== null && modifier !== undefined
    ? `${prefix}-${modifier}`
    : null
);

const containerToIconSize = {
  small: 'sm',
  medium: 'lg',
  large: '2x',
};

const bulmaModifers = {
  isFullWidth: 'is-fullwidth',
  isInverted: 'is-inverted',
  isLight: 'is-light',
  isLoading: 'is-loading',
  isOutlined: 'is-outlined',
  isRounded: 'is-rounded',
  isSelected: 'is-selected',
  isStatic: 'is-static',
  hasAddons: 'has-addons',
};

const getIconSize = containerSize => containerToIconSize[containerSize];

export {
  getPrefixedClassName,
  getIconSize,
  bulmaModifers,
};
