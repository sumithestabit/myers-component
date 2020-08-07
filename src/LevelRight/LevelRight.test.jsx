import React from 'react';
import TestRenderer from 'react-test-renderer';
import LevelRight from './LevelRight';

describe('LevelRight', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(<LevelRight>a</LevelRight>))
      .not.toThrow();
  });

  test('can render children', () => {
    const renderer = TestRenderer.create((<LevelRight><span id="test-target" /></LevelRight>));

    expect(() => renderer.root.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });
});
