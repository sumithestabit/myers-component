import React from 'react';
import TestRenderer from 'react-test-renderer';
import FeedbackButton from './FeedbackButton';
import { getClassList } from '../utils/testUtil';

describe('FeedbackButton', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(
      <FeedbackButton feedbackContext={{ test: 'test' }} />,
    )).not.toThrow();
  });

  test('button can have css-classes', () => {
    const renderer = TestRenderer.create((
      <FeedbackButton className="a" feedbackContext={{ test: 'test' }} />
    ));
    const feedbackButton = renderer.root.findByType('button');

    expect(getClassList(feedbackButton)).toContain('a');
  });

  test('clicking button will trigger openForm func from context', () => {
    const mockFunc = jest.fn();
    const renderer = TestRenderer.create((
      <FeedbackButton className="a" feedbackContext={{ openForm: mockFunc }} />
    ));
    const feedbackButton = renderer.root.findByType('button');
    feedbackButton.props.onClick();

    expect(mockFunc).toHaveBeenCalled();
  });
});
