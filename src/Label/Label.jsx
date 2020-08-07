import React from 'react';
import classNames from 'classnames';

class Label extends React.PureComponent {
  static defaultProps = {
    className: null,
    children: null,
    name: null,
  };

  render = () => (
    // eslint-disable-next-line jsx-a11y/label-has-for
    <label
      className={classNames('label', this.props.className)}
      htmlFor={this.props.name}
    >
      {this.props.children}
    </label>
  );
}

export default Label;
