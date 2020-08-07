import React from 'react';
import TestRenderer from 'react-test-renderer';
import Title from './Title';
import { findByClass, getClassList } from '../utils/testUtil';

describe('Title', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(<Title>a</Title>))
      .not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create(<Title className="b">a</Title>);
    const title = findByClass(renderer.root, 'title');

    expect(getClassList(title)).toContain('b');
  });

  test('can render text', () => {
    const renderer = TestRenderer.create(<Title>a</Title>);
    const title = findByClass(renderer.root, 'title');

    expect(title.children).toContain('a');
  });

  test('can be sized', () => {
    const renderer = TestRenderer.create(<Title size="1">a</Title>);
    const title = findByClass(renderer.root, 'title');

    expect(getClassList(title)).toContain('is-1');
  });

  test('can be spaced', () => {
    const renderer = TestRenderer.create(<Title isSpaced>a</Title>);
    const title = findByClass(renderer.root, 'title');

    expect(getClassList(title)).toContain('is-spaced');
  });
});
