import React from 'react';
import TestRenderer from 'react-test-renderer';
import Subtitle from './Subtitle';
import { findByClass, getClassList } from '../utils/testUtil';

describe('Subtitle', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(<Subtitle>a</Subtitle>))
      .not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create(<Subtitle className="b">a</Subtitle>);
    const subtitle = findByClass(renderer.root, 'subtitle');

    expect(getClassList(subtitle)).toContain('b');
  });

  test('can render text', () => {
    const renderer = TestRenderer.create(<Subtitle>a</Subtitle>);
    const subtitle = findByClass(renderer.root, 'subtitle');

    expect(subtitle.children).toContain('a');
  });
  test('can be sized', () => {
    const renderer = TestRenderer.create(<Subtitle size="1">a</Subtitle>);
    const subtitle = findByClass(renderer.root, 'subtitle');

    expect(getClassList(subtitle)).toContain('is-1');
  });

  test('can be spaced', () => {
    const renderer = TestRenderer.create(<Subtitle isSpaced>a</Subtitle>);
    const title = findByClass(renderer.root, 'subtitle');

    expect(getClassList(title)).toContain('is-spaced');
  });
});
