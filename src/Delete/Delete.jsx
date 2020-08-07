import React from 'react';
import classNames from 'classnames';
import { getPrefixedClassName } from '../utils/bulmaUtil';

class Delete extends React.PureComponent {
  static defaultProps = {
    className: null,
    size: null,
  };

  render = () => (
    <button
      className={classNames(
        'delete',
        getPrefixedClassName('is', this.props.size),
        this.props.className,
      )}
      type="button"
      onClick={this.props.onClick}
    />
  );
}

export default Delete;
