import React from 'react';
import classNames from 'classnames';
import { getHasError } from '../utils/formUtil';

class Input extends React.PureComponent {
  static defaultProps = {
    className: null,
  };

  render = () => {
    const {
      input: { value, ...inputProps },
      meta,
      className,
      ...otherProps
    } = this.props;

    return (
      <input
        id={inputProps.name}
        className={classNames('input', className, {
          'is-danger': getHasError(this.props),
        })}
        value={value === undefined ? '' : value}
        {...otherProps}
        {...inputProps}
      />
    );
  }
}

export default Input;
