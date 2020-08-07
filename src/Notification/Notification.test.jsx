import React from 'react';
import TestRenderer from 'react-test-renderer';
import Notification from './Notification';
import { findByClass, getClassList } from '../utils/testUtil';

describe('Notification', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(<Notification>a</Notification>))
      .not.toThrow();
  });

  test('can render children', () => {
    const renderer = TestRenderer.create((
      <Notification>
        <span id="test-target" />
      </Notification>
    ));

    expect(() => renderer.root.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create(<Notification className="b">a</Notification>);
    const notification = findByClass(renderer.root, 'notification');

    expect(getClassList(notification)).toContain('b');
  });

  test('can be colored', () => {
    const renderer = TestRenderer.create(<Notification color="primary">a</Notification>);
    const notification = findByClass(renderer.root, 'notification');

    expect(getClassList(notification)).toContain('is-primary');
  });
});
