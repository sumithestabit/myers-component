import React from 'react';
import TestRenderer from 'react-test-renderer';
import CardImage from './CardImage';
import { getClassList, findByClass } from '../utils/testUtil';

describe('CardImage', () => {
  test('can render', () => {
    expect(() => TestRenderer.create((
      <CardImage>a</CardImage>
    ))).not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create((
      <CardImage className="b">a</CardImage>
    ));
    const cardImage = findByClass(renderer.root, 'card-image');

    expect(getClassList(cardImage)).toContain('b');
  });

  test('can render children', () => {
    const renderer = TestRenderer.create((
      <CardImage>
        <span id="test-target" />
      </CardImage>
    ));

    expect(() => renderer.root.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });
});
