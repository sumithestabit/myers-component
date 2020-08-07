import React from 'react';
import TestRenderer from 'react-test-renderer';
import Form from './Form';

describe('Form', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(<Form onSubmit={() => { }} />))
      .not.toThrow();
  });

  test('can submit empty object', () => {
    const handleSubmit = jest.fn();
    const renderer = TestRenderer.create(<Form onSubmit={handleSubmit} />);
    const form = renderer.root.findByType('form');

    TestRenderer.act(() => form.props.onSubmit());
    expect(handleSubmit).toHaveBeenCalledWith(
      {},
      expect.anything(),
      expect.anything(),
    );
  });

  test('can submit initial values', () => {
    const handleSubmit = jest.fn();
    const renderer = TestRenderer.create((
      <Form
        onSubmit={handleSubmit}
        initialValues={{ a: 1 }}
      />
    ));
    const form = renderer.root.findByType('form');

    TestRenderer.act(() => form.props.onSubmit());

    expect(handleSubmit).toHaveBeenCalledWith(
      { a: 1 },
      expect.anything(),
      expect.anything(),
    );
  });

  test('can submit after successful record validation', () => {
    const handleValidate = jest.fn(() => undefined);
    const handleSubmit = jest.fn();
    const renderer = TestRenderer.create((
      <Form
        onSubmit={handleSubmit}
        validate={handleValidate}
      />
    ));
    const form = renderer.root.findByType('form');

    TestRenderer.act(() => form.props.onSubmit());

    expect(handleValidate).toHaveBeenCalledWith({});
    expect(handleSubmit).toHaveBeenCalled();
  });

  test('can not submit after failed record validation', () => {
    const handleValidate = jest.fn(() => 'Required');
    const handleSubmit = jest.fn();
    const renderer = TestRenderer.create((
      <Form
        onSubmit={handleSubmit}
        validate={handleValidate}
      />
    ));
    const form = renderer.root.findByType('form');

    TestRenderer.act(() => form.props.onSubmit());

    expect(handleValidate).toHaveBeenCalledWith({});
    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
