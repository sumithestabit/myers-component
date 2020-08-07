import React from 'react';
import TestRenderer from 'react-test-renderer';
import FeedbackModalProvider from './FeedbackModalProvider';
import FeedbackForm from './FeedbackForm';
import FeedbackButton from './FeedbackButton';
import RatingField from './RatingField';
import SuccessModal from './SuccessModal';
import SubmitButton from '../SubmitButton/SubmitButton';
import { findByClass, getClassList } from '../utils/testUtil';

jest.mock('@propalytics-common/etc/lib/graphql', () => (
  {
    request: jest.fn(async () => ({ data: { errors: [] } })),
  }
));
const graphql = require('@propalytics-common/etc/lib/graphql');

describe('FeedbackModalProvider', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(
      <FeedbackModalProvider>
        a
      </FeedbackModalProvider>,
    )).not.toThrow();
  });

  test('can render children', () => {
    const renderer = TestRenderer.create(
      <FeedbackModalProvider>
        <span id="test-target" />
      </FeedbackModalProvider>,
    );

    expect(() => renderer.root.findByProps({ id: 'test-target' }))
      .not.toThrow();
  });

  test('email field will be initialized via user prop', () => {
    let renderer;
    TestRenderer.act(() => {
      renderer = TestRenderer.create(
        <FeedbackModalProvider>
          <FeedbackButton user={{ email: 'test@test.com' }} />
        </FeedbackModalProvider>,
      );
    });
    const emailField = renderer.root.findByProps({ id: 'feedbackEmail' });

    expect(emailField.props.value).toBe('test@test.com');
  });

  test('form will not submit with empty req fields', async () => {
    let renderer;
    TestRenderer.act(() => {
      renderer = TestRenderer.create(
        <FeedbackModalProvider>
          a
        </FeedbackModalProvider>,
      );
    });
    const submitButton = renderer.root.findByType(SubmitButton);
    const button = submitButton.findByType('button');
    TestRenderer.act(() => button.props.onClick());

    expect(graphql.request).not.toHaveBeenCalled();
  });

  describe('test submitting form with inputs', () => {
    let renderer;
    let textAreaField;
    let submitButtonInput;
    let ratingButtons;
    let feedbackForm;
    let expectedSubmitObj;

    beforeEach(() => {
      renderer = TestRenderer.create(
        <FeedbackModalProvider>
          a
        </FeedbackModalProvider>,
      );

      const ratingField = renderer.root.findByType(RatingField);
      ratingButtons = ratingField.findAllByType('button');
      TestRenderer.act(() => ratingButtons[0].props.onClick());

      textAreaField = renderer.root.findByProps({ id: 'feedbackComment' });
      TestRenderer.act(() => {
        textAreaField.props.onChange('Comment to pass validation.');
      });

      const emailInput = renderer.root.findByProps({ id: 'feedbackEmail' });
      TestRenderer.act(() => emailInput.props.onChange('test@test.com'));

      [feedbackForm] = renderer.root.findByType(FeedbackForm).children;
      jest.spyOn(feedbackForm.instance, 'onSubmit');
      const submitButton = renderer.root.findByType(SubmitButton);
      submitButtonInput = submitButton.findByType('button');

      expectedSubmitObj = {
        feedbackRating: 1,
        feedbackCategory: 'Feedback',
        feedbackComment: 'Comment to pass validation.',
        feedbackEmail: 'test@test.com',
      };

      graphql.request.mockClear();
    });

    afterAll(() => {
      graphql.request.mockClear();
    });

    test('form will submit all inputs correctly', async () => {
      await TestRenderer.act(() => submitButtonInput.props.onClick());

      expect(feedbackForm.instance.onSubmit).toHaveBeenCalledWith(expectedSubmitObj);
      expect(graphql.request).toHaveBeenCalled();
    });

    test('form will reset after submitting', async () => {
      await TestRenderer.act(() => submitButtonInput.props.onClick());

      expect(textAreaField.props.value).toBe('');
    });

    test.each([
      [1],
      [2],
      [3],
      [4],
      [5],
    ])('form will submit with correct rating if button %s is clicked', async (ratingValue) => {
      await TestRenderer.act(async () => ratingButtons[ratingValue - 1].props.onClick());
      await TestRenderer.act(async () => submitButtonInput.props.onClick());
      expectedSubmitObj.feedbackRating = ratingValue;
      expect(feedbackForm.instance.onSubmit).toHaveBeenCalledWith(expectedSubmitObj);
    });

    test('success modal appears after feedback form successfully submitted', async () => {
      await TestRenderer.act(async () => submitButtonInput.props.onClick());
      const successModal = renderer.root.findByType(SuccessModal);
      const modal = findByClass(successModal, 'modal');
      expect(getClassList(modal)).toContain('is-active');
    });
  });

  test('cancel button will close form modal', () => {
    const renderer = TestRenderer.create(
      <FeedbackModalProvider>
        a
      </FeedbackModalProvider>,
    );
    TestRenderer.act(() => renderer.root.instance.openForm());

    const footerButtonsDiv = findByClass(renderer.root, 'buttons');
    const cancelButton = footerButtonsDiv.find(elem => (
      elem.children.indexOf('Cancel') !== -1
    ));
    cancelButton.props.onClick();
    const feedbackForm = renderer.root.findByType('form');
    const formModal = findByClass(feedbackForm, 'modal');

    expect(getClassList(formModal)).not.toContain('is-active');
    expect(graphql.request).not.toHaveBeenCalled();
  });
});
