import React from 'react';
import TestRenderer from 'react-test-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import FAIcon from './FAIcon';
import { getClassList, findByClass } from '../utils/testUtil';

describe('FAIcon', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(<FAIcon icon={faUser} />))
      .not.toThrow();
  });

  test('can have css-classes on conatiner', () => {
    const renderer = TestRenderer.create((
      <FAIcon containerClassName="a" icon={faUser} />
    ));
    const icon = findByClass(renderer.root, 'icon');

    expect(getClassList(icon)).toContain('a');
  });

  test('can have css-classes on icon', () => {
    const renderer = TestRenderer.create((
      <FAIcon className="a" icon={faUser} />
    ));
    const fontAwesome = renderer.root.findByType(FontAwesomeIcon);

    expect(getClassList(fontAwesome)).toContain('a');
  });

  test('can be sized', () => {
    const renderer = TestRenderer.create((
      <FAIcon size="large" icon={faUser} />
    ));
    const icon = findByClass(renderer.root, 'icon');
    const fontAwesome = icon.findByType(FontAwesomeIcon);

    expect(getClassList(icon)).toContain('is-large');
    expect(fontAwesome.props.size).toContain('2x');
  });

  test('can be colored', () => {
    const renderer = TestRenderer.create((
      <FAIcon color="primary" icon={faUser} />
    ));
    const icon = findByClass(renderer.root, 'icon');

    expect(getClassList(icon)).toContain('has-text-primary');
  });

  test('can set icon size seperately from container', () => {
    const renderer = TestRenderer.create((
      <FAIcon size="large" iconSize="3x" icon={faUser} />
    ));
    const icon = findByClass(renderer.root, 'icon');
    const fontAwesome = icon.findByType(FontAwesomeIcon);

    expect(getClassList(icon)).toContain('is-large');
    expect(fontAwesome.props.size).toContain('3x');
  });
});
