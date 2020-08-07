import React from 'react';
import TestRenderer from 'react-test-renderer';
import ModalCard from './ModalCard';
import { getClassList, findByClass } from '../utils/testUtil';

describe('ModalCard', () => {
  test('can render', () => {
    expect(() => TestRenderer.create((
      <ModalCard
        isActive
        close={() => {}}
        body={<span />}
      />
    ))).not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create((
      <ModalCard
        className="b"
        isActive
        close={() => {}}
        body={<span />}
      />
    ));
    const modalContent = findByClass(renderer.root, 'modal-content');

    expect(getClassList(modalContent)).toContain('b');
  });

  test('can render title', () => {
    const renderer = TestRenderer.create((
      <ModalCard
        isActive
        close={() => {}}
        title="Title"
        body={<span />}
      />
    ));
    const title = findByClass(renderer.root, 'modal-card-title');

    expect(title.children).toContain('Title');
  });

  test('can render body', () => {
    const renderer = TestRenderer.create((
      <ModalCard
        isActive
        close={() => {}}
        body={<span id="test-target" />}
      />
    ));
    const body = findByClass(renderer.root, 'modal-card-body');

    expect(() => body.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });

  test('can render foot', () => {
    const renderer = TestRenderer.create((
      <ModalCard
        isActive
        close={() => {}}
        body={<span />}
        foot={<span id="test-target" />}
      />
    ));
    const foot = findByClass(renderer.root, 'modal-card-foot');

    expect(() => foot.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });

  test('can be active or inactive', () => {
    const renderer = TestRenderer.create((
      <ModalCard
        isActive
        close={() => {}}
        body={<span />}
      />
    ));
    const modal = findByClass(renderer.root, 'modal');

    expect(getClassList(modal)).toContain('is-active');

    renderer.update(
      <ModalCard
        isActive={false}
        close={() => {}}
        body={<span />}
      />,
    );

    expect(getClassList(modal)).not.toContain('is-active');
  });

  test('can be closed by delete button click', () => {
    const handleClose = jest.fn();
    const renderer = TestRenderer.create((
      <ModalCard
        isActive={false}
        close={handleClose}
        body={<span />}
      />
    ));
    const deleteButton = findByClass(renderer.root, 'delete');

    deleteButton.props.onClick();

    expect(handleClose).toHaveBeenCalled();
  });

  test('can be closed by close button click', () => {
    const handleClose = jest.fn();
    const renderer = TestRenderer.create((
      <ModalCard
        isActive={false}
        close={handleClose}
        body={<span />}
      />
    ));
    const modalClose = findByClass(renderer.root, 'modal-close');

    modalClose.props.onClick();

    expect(handleClose).toHaveBeenCalled();
  });

  test('can be closed by background click', () => {
    const handleClose = jest.fn();
    const renderer = TestRenderer.create((
      <ModalCard
        isActive={false}
        close={handleClose}
        body={<span />}
      />
    ));
    const modalBackgound = findByClass(renderer.root, 'modal-background');
    modalBackgound.props.onClick();

    expect(handleClose).toHaveBeenCalled();
  });
});
