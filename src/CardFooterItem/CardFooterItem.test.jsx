import React from 'react';
import TestRenderer from 'react-test-renderer';
import CardFooterItem from './CardFooterItem';
import { getClassList, findByClass } from '../utils/testUtil';

describe('CardFooterItem', () => {
  test('can render', () => {
    expect(() => TestRenderer.create((
      <CardFooterItem />
    ))).not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create((
      <CardFooterItem className="b" />
    ));
    const cardFooterItem = findByClass(renderer.root, 'card-footer-item');

    expect(getClassList(cardFooterItem)).toContain('b');
  });

  test('can render children', () => {
    const renderer = TestRenderer.create((
      <CardFooterItem>
        <span id="test-target" />
      </CardFooterItem>
    ));

    expect(() => renderer.root.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });
});
