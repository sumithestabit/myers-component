import React from 'react';
import TestRenderer from 'react-test-renderer';
import Card from './Card';
import { getClassList, findByClass } from '../utils/testUtil';

describe('Card', () => {
  test('can render', () => {
    expect(() => TestRenderer.create((
      <Card>a</Card>
    ))).not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create((
      <Card className="b">a</Card>
    ));
    const card = findByClass(renderer.root, 'card');

    expect(getClassList(card)).toContain('b');
  });

  test('can render children', () => {
    const renderer = TestRenderer.create((
      <Card>
        <span id="test-target" />
      </Card>
    ));

    expect(() => renderer.root.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });
});
