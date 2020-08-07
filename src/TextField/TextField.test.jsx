import React from 'react';
import TestRenderer from 'react-test-renderer';
import Form from '../Form/Form';
import TextField from './TextField';
import SubmitButton from '../SubmitButton/SubmitButton';
import { getClassList } from '../utils/testUtil';

describe('TextField', () => {
  const renderForm = (props) => {
    const onSubmit = jest.fn();
    let renderer;
    TestRenderer.act(() => {
      renderer = TestRenderer.create(
        <Form onSubmit={onSubmit}>
          <TextField {...props} name="a" />
          <SubmitButton />
        </Form>,
      );
    });

    const textField = renderer.root.findByType(TextField);
    const domInput = textField.findByType('input');

    const submitButton = renderer.root.findByType(SubmitButton);
    const domSubmit = submitButton.findByType('button');
    return { onSubmit, domInput, domSubmit };
  };

  test('submit with text', () => {
    const { onSubmit, domInput, domSubmit } = renderForm({
      isRequired: false,
    });

    TestRenderer.act(() => domInput.props.onChange('value'));
    TestRenderer.act(() => domSubmit.props.onClick());

    expect(onSubmit).toHaveBeenCalledWith(
      { a: 'value' },
      expect.anything(),
      expect.anything(),
    );
  });

  test('submit without text', () => {
    const { onSubmit, domSubmit } = renderForm({
      isRequired: false,
    });

    TestRenderer.act(() => domSubmit.props.onClick());

    expect(onSubmit).toHaveBeenCalledWith(
      {},
      expect.anything(),
      expect.anything(),
    );
  });

  test('submit with required text', () => {
    const { onSubmit, domInput, domSubmit } = renderForm({
      isRequired: true,
    });

    TestRenderer.act(() => domInput.props.onChange('value'));
    TestRenderer.act(() => domSubmit.props.onClick());

    expect(onSubmit).toHaveBeenCalledWith(
      { a: 'value' },
      expect.anything(),
      expect.anything(),
    );
  });

  test('submit without required text', () => {
    const { onSubmit, domSubmit } = renderForm({
      isRequired: true,
    });

    TestRenderer.act(() => domSubmit.props.onClick());

    expect(onSubmit).not.toHaveBeenCalled();
  });

  test('can have css-classes', () => {
    const { domInput } = renderForm({
      className: 'b',
    });

    expect(getClassList(domInput)).toContain('b');
  });

  test('can have placeholder text', () => {
    const { domInput } = renderForm({
      placeholder: 'text',
    });

    expect(domInput.props.placeholder).toBe('text');
  });
});
