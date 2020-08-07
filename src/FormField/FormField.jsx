import React from 'react';
import classNames from 'classnames';

class FormField extends React.PureComponent {
  static defaultProps = {
    className: null,
    children: null,
  };

  render = () => (
    <div className={classNames('field', this.props.className)}>
      {this.props.children}
    </div>
  );
}

export default FormField;
