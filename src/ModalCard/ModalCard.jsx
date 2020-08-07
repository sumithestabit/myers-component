import React from 'react';
import Modal from '../Modal/Modal';
import Delete from '../Delete/Delete';

class ModalCard extends React.PureComponent {
  static defaultProps = {
    className: null,
    title: null,
    foot: null,
  };

  render = () => (
    <Modal
      className={this.props.className}
      isActive={this.props.isActive}
      close={this.props.close}
    >
      <header className="modal-card-head">
        {this.props.title !== null
          ? <p className="modal-card-title">{this.props.title}</p>
          : null}
        <Delete onClick={this.props.close} />
      </header>
      <section className="modal-card-body">
        {this.props.body}
      </section>
      <footer className="modal-card-foot">
        {this.props.foot}
      </footer>
    </Modal>
  );
}

export default ModalCard;
