import React from 'react';
import TestRenderer from 'react-test-renderer';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import { findByClass, getClassList } from '../utils/testUtil';
import FAIcon from '../FAIcon/FAIcon';

describe('Button', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(<Button>a</Button>))
      .not.toThrow();
  });

  test('can render as anchor', () => {
    const renderer = TestRenderer.create((
      <Button as="a">b</Button>
    ));

    expect(() => renderer.root.findByType('a'))
      .not.toThrow();
  });

  test('can render icons', () => {
    const renderer = TestRenderer.create((
      <Button>
        <FAIcon icon={faCircle} />
      </Button>
    ));
    const button = findByClass(renderer.root, 'button');

    expect(() => button.findByType(FAIcon))
      .not.toThrow();
  });

  test('can render icons with text', () => {
    const renderer = TestRenderer.create((
      <Button>
        <FAIcon icon={faCircle} />
        a
      </Button>
    ));
    const button = findByClass(renderer.root, 'button');

    expect(() => button.findByType(FAIcon))
      .not.toThrow();
    expect(button.children).toContain('a');
  });

  test('can have css-classes', () => {
    const renderer = TestRenderer.create(<Button className="b">a</Button>);
    const button = renderer.root.findByType('button');

    expect(getClassList(button)).toContain('b');
  });

  test('can be clicked', () => {
    const handleClick = jest.fn();
    const renderer = TestRenderer.create(<Button onClick={handleClick}>a</Button>);
    const button = renderer.root.findByType('button');

    button.props.onClick();
    expect(handleClick).toHaveBeenCalled();
  });

  test.each([
    ['isFullWidth', 'is-fullwidth'],
    ['isInverted', 'is-inverted'],
    ['isLight', 'is-light'],
    ['isLoading', 'is-loading'],
    ['isOutlined', 'is-outlined'],
    ['isRounded', 'is-rounded'],
    ['isSelected', 'is-selected'],
    ['isStatic', 'is-static'],
  ])('"%s" prop controls the css-class "%s"', (propName, cssClass) => {
    const renderer = TestRenderer.create(<Button>a</Button>);
    const button = findByClass(renderer.root, 'button');
    expect(getClassList(button)).not.toContain(cssClass);

    renderer.update(<Button {...{ [propName]: true }}>a</Button>);
    expect(getClassList(button)).toContain(cssClass);
  });

  test('can be colored', () => {
    const renderer = TestRenderer.create(<Button color="primary">a</Button>);
    const hero = findByClass(renderer.root, 'button');

    expect(getClassList(hero)).toContain('is-primary');
  });

  test('can be sized', () => {
    const renderer = TestRenderer.create(<Button size="large">a</Button>);
    const hero = findByClass(renderer.root, 'button');

    expect(getClassList(hero)).toContain('is-large');
  });
});
