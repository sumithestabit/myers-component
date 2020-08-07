import React from 'react';
import TestRenderer from 'react-test-renderer';
import CardContent from './CardContent';
import { getClassList, findByClass } from '../utils/testUtil';

describe('CardContent', () => {
  test('can render', () => {
    expect(() => TestRenderer.create((
      <CardContent>a</CardContent>
    ))).not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create((
      <CardContent className="b">a</CardContent>
    ));
    const cardContent = findByClass(renderer.root, 'card-content');

    expect(getClassList(cardContent)).toContain('b');
  });

  test('can render children', () => {
    const renderer = TestRenderer.create((
      <CardContent>
        <span id="test-target" />
      </CardContent>
    ));

    expect(() => renderer.root.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });
});
