import React from 'react';
import TestRenderer from 'react-test-renderer';
import CardHeader from './CardHeader';
import { getClassList, findByClass } from '../utils/testUtil';

describe('CardHeader', () => {
  test('can render', () => {
    expect(() => TestRenderer.create((<CardHeader />)))
      .not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create((
      <CardHeader className="b" />
    ));
    const cardHeader = findByClass(renderer.root, 'card-header');

    expect(getClassList(cardHeader)).toContain('b');
  });

  test('can render header title and icon', () => {
    const renderer = TestRenderer.create((
      <CardHeader title="testing" icon={<i id="test-target" />} />
    ));
    const title = findByClass(renderer.root, 'card-header-title');
    const icon = findByClass(renderer.root, 'card-header-icon');

    expect(title.children).toContain('testing');
    expect(() => icon.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });

  test('can center title', () => {
    const renderer = TestRenderer.create((
      <CardHeader title="testing" isTitleCentered />
    ));
    const title = findByClass(renderer.root, 'card-header-title');

    expect(getClassList(title)).toContain('is-centered');
  });
});
