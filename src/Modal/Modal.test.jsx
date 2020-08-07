import React from 'react';
import TestRenderer from 'react-test-renderer';
import Modal from './Modal';
import { getClassList, findByClass } from '../utils/testUtil';

describe('Modal', () => {
  test('can render', () => {
    expect(() => TestRenderer.create((
      <Modal isActive close={() => {}}>
        a
      </Modal>
    ))).not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create((
      <Modal className="b" isActive close={() => {}}>
        a
      </Modal>
    ));
    const modalContent = findByClass(renderer.root, 'modal-content');

    expect(getClassList(modalContent)).toContain('b');
  });

  test('can render children', () => {
    const renderer = TestRenderer.create((
      <Modal isActive close={() => {}}>
        <span />
      </Modal>
    ));

    expect(() => renderer.root.findByType('span'))
      .not.toThrow();
  });

  test('can be active or inactive', () => {
    const renderer = TestRenderer.create((
      <Modal isActive close={() => {}}>
        a
      </Modal>
    ));
    const modal = findByClass(renderer.root, 'modal');

    expect(getClassList(modal)).toContain('is-active');

    renderer.update(
      <Modal isActive={false} close={() => {}}>
        a
      </Modal>,
    );

    expect(getClassList(modal)).not.toContain('is-active');
  });

  test('can be closed by close button click', () => {
    const handleClose = jest.fn();
    const renderer = TestRenderer.create((
      <Modal isActive={false} close={handleClose}>
        a
      </Modal>
    ));
    const modalClose = findByClass(renderer.root, 'modal-close');

    modalClose.props.onClick();

    expect(handleClose).toHaveBeenCalled();
  });

  test('can be closed by background click', () => {
    const handleClose = jest.fn();
    const renderer = TestRenderer.create((
      <Modal isActive={false} close={handleClose}>
        a
      </Modal>
    ));
    const modalBackgound = findByClass(renderer.root, 'modal-background');
    modalBackgound.props.onClick();

    expect(handleClose).toHaveBeenCalled();
  });
});
