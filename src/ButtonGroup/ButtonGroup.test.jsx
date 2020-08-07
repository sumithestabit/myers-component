import React from 'react';
import TestRenderer from 'react-test-renderer';
import ButtonGroup from './ButtonGroup';
import { findByClass, getClassList } from '../utils/testUtil';

describe('ButtonGroup', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(<ButtonGroup>a</ButtonGroup>))
      .not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create(<ButtonGroup className="b">a</ButtonGroup>);
    const buttons = findByClass(renderer.root, 'buttons');

    expect(getClassList(buttons)).toContain('b');
  });

  test('can render children', () => {
    const renderer = TestRenderer.create((<ButtonGroup><span id="test-target" /></ButtonGroup>));

    expect(() => renderer.root.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });

  test('can have addons', () => {
    const renderer = TestRenderer.create(<ButtonGroup>a</ButtonGroup>);
    const button = findByClass(renderer.root, 'buttons');
    expect(getClassList(button)).not.toContain('has-addons');

    renderer.update(<ButtonGroup hasAddons>a</ButtonGroup>);
    expect(getClassList(button)).toContain('has-addons');
  });

  test('can be aligned', () => {
    const renderer = TestRenderer.create(<ButtonGroup alignment="centered">a</ButtonGroup>);
    const hero = findByClass(renderer.root, 'buttons');

    expect(getClassList(hero)).toContain('is-centered');
  });

  test('can be sized', () => {
    const renderer = TestRenderer.create(<ButtonGroup size="large">a</ButtonGroup>);
    const hero = findByClass(renderer.root, 'buttons');

    expect(getClassList(hero)).toContain('are-large');
  });
});
