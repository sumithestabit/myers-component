import React from 'react';
import TestRenderer from 'react-test-renderer';
import LevelItem from './LevelItem';
import { findByClass, getClassList } from '../utils/testUtil';

describe('LevelItem', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(<LevelItem>a</LevelItem>))
      .not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create(<LevelItem className="b">a</LevelItem>);
    const levelItem = findByClass(renderer.root, 'level-item');

    expect(getClassList(levelItem)).toContain('b');
  });

  test('can render children', () => {
    const renderer = TestRenderer.create((<LevelItem><span id="test-target" /></LevelItem>));

    expect(() => renderer.root.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });
});
