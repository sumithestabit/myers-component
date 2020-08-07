import React from 'react';
import TestRenderer from 'react-test-renderer';
import LevelLeft from './LevelLeft';

describe('LevelLeft', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(<LevelLeft>a</LevelLeft>))
      .not.toThrow();
  });

  test('can render children', () => {
    const renderer = TestRenderer.create((<LevelLeft><span id="test-target" /></LevelLeft>));

    expect(() => renderer.root.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });
});
