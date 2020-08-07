import React from 'react';
import TestRenderer from 'react-test-renderer';
import Level from './Level';
import { findByClass, getClassList } from '../utils/testUtil';

describe('Level', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(<Level>a</Level>))
      .not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create(<Level className="b">a</Level>);
    const level = findByClass(renderer.root, 'level');

    expect(getClassList(level)).toContain('b');
  });

  test('can render children', () => {
    const renderer = TestRenderer.create((<Level><span id="test-target" /></Level>));

    expect(() => renderer.root.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });

  test('can be set to mobile', () => {
    const renderer = TestRenderer.create(<Level isMobile>a</Level>);
    const level = findByClass(renderer.root, 'level');

    expect(getClassList(level)).toContain('is-mobile');
  });
});
