import React from 'react';
import classNames from 'classnames';

class Modal extends React.PureComponent {
  static defaultProps = {
    className: null,
  };

  render = () => (
    <div className={classNames('modal', { 'is-active': this.props.isActive })}>
      <div
        className="modal-background"
        onClick={this.props.close}
        onKeyPress={this.props.close}
        role="button"
        tabIndex={-1}
      />
      <div className={classNames('modal-content', this.props.className)}>
        {this.props.children}
      </div>
      <button
        className="modal-close is-large"
        onClick={this.props.close}
        type="button"
      />
    </div>
  );
}

export default Modal;
