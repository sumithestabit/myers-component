import React from 'react';
import TestRenderer from 'react-test-renderer';
import FallbackLoader from './FallbackLoader';

describe('FallbackLoader', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(<FallbackLoader />))
      .not.toThrow();
  });
});
