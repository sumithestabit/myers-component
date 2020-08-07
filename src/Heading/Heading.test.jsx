import React from 'react';
import TestRenderer from 'react-test-renderer';
import Heading from './Heading';
import { findByClass, getClassList } from '../utils/testUtil';

describe('Heading', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(<Heading>a</Heading>))
      .not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create(<Heading className="b">a</Heading>);
    const heading = findByClass(renderer.root, 'heading');

    expect(getClassList(heading)).toContain('b');
  });

  test('can render text', () => {
    const renderer = TestRenderer.create(<Heading>a</Heading>);
    const heading = findByClass(renderer.root, 'heading');

    expect(heading.children).toContain('a');
  });
});
