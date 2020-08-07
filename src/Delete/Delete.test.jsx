import React from 'react';
import TestRenderer from 'react-test-renderer';
import Delete from './Delete';
import { findByClass, getClassList } from '../utils/testUtil';

describe('Delete', () => {
  let handleClick;
  beforeEach(() => {
    handleClick = jest.fn();
  });

  test('can render', () => {
    expect(() => TestRenderer.create(<Delete onClick={handleClick} />))
      .not.toThrow();
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create(<Delete onClick={handleClick} className="b" />);
    const button = findByClass(renderer.root, 'delete');

    expect(getClassList(button)).toContain('b');
  });

  test('can be sized', () => {
    const renderer = TestRenderer.create((<Delete onClick={handleClick} size="large" />));
    const button = findByClass(renderer.root, 'delete');

    expect(getClassList(button)).toContain('is-large');
  });

  test('can be clicked', () => {
    const renderer = TestRenderer.create(<Delete onClick={handleClick} />);
    const button = findByClass(renderer.root, 'delete');

    button.props.onClick();
    expect(handleClick).toHaveBeenCalled();
  });
});
