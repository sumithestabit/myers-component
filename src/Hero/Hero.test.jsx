import React from 'react';
import TestRenderer from 'react-test-renderer';
import Hero from './Hero';
import { findByClass, getClassList } from '../utils/testUtil';

describe('Hero', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(<Hero>a</Hero>))
      .not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create(<Hero className="b">a</Hero>);
    const hero = findByClass(renderer.root, 'hero');

    expect(getClassList(hero)).toContain('b');
  });

  test('can render head', () => {
    const renderer = TestRenderer.create((
      <Hero head={<span id="test-target" />}>a</Hero>
    ));
    const heroHead = findByClass(renderer.root, 'hero-head');

    expect(() => heroHead.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });

  test('can render foot', () => {
    const renderer = TestRenderer.create((
      <Hero foot={<span id="test-target" />}>a</Hero>
    ));
    const heroFoot = findByClass(renderer.root, 'hero-foot');

    expect(() => heroFoot.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });

  test('can render body', () => {
    const renderer = TestRenderer.create((
      <Hero><span id="test-target" /></Hero>
    ));
    const heroBody = findByClass(renderer.root, 'hero-body');

    expect(() => heroBody.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });

  test('can be colored', () => {
    const renderer = TestRenderer.create(<Hero color="primary">a</Hero>);
    const hero = findByClass(renderer.root, 'hero');

    expect(getClassList(hero)).toContain('is-primary');
  });

  test('can be sized', () => {
    const renderer = TestRenderer.create(<Hero size="large">a</Hero>);
    const hero = findByClass(renderer.root, 'hero');

    expect(getClassList(hero)).toContain('is-large');
  });

  test('can have bold gradient', () => {
    const renderer = TestRenderer.create(<Hero>a</Hero>);
    const hero = findByClass(renderer.root, 'hero');

    expect(getClassList(hero)).not.toContain('is-bold');
    renderer.update(<Hero isBold>a</Hero>);

    expect(getClassList(hero)).toContain('is-bold');
  });
});
