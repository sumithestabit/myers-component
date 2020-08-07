import React from 'react';
import TestRenderer from 'react-test-renderer';
import CardFooter from './CardFooter';
import { getClassList, findByClass } from '../utils/testUtil';

describe('CardFooter', () => {
  test('can render', () => {
    expect(() => TestRenderer.create((
      <CardFooter>a</CardFooter>
    ))).not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create((
      <CardFooter className="b">a</CardFooter>
    ));
    const cardFooter = findByClass(renderer.root, 'card-footer');

    expect(getClassList(cardFooter)).toContain('b');
  });

  test('can render children', () => {
    const renderer = TestRenderer.create((
      <CardFooter>
        <span id="test-target" />
      </CardFooter>
    ));

    expect(() => renderer.root.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });
});
