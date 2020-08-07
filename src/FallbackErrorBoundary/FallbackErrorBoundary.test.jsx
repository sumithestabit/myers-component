import React from 'react';
import TestRenderer from 'react-test-renderer';
import FallbackErrorBoundary from './FallbackErrorBoundary';
import FallbackError from './FallbackError';

describe('Hero', () => {
  test('can render', () => {
    expect(() => TestRenderer.create(<FallbackErrorBoundary>a</FallbackErrorBoundary>))
      .not.toThrow();
  });

  test('can capture error from throwing components', () => {
    const WorkingComponent = () => null;

    const renderer = TestRenderer.create((
      <FallbackErrorBoundary>
        <WorkingComponent />
      </FallbackErrorBoundary>
    ));

    expect(() => renderer.root.findByType(WorkingComponent))
      .not.toThrow();
    expect(() => renderer.root.findByType(FallbackError))
      .toThrow();

    const BrokenComponent = () => {
      throw new Error();
    };

    renderer.update(
      <FallbackErrorBoundary>
        <BrokenComponent />
      </FallbackErrorBoundary>,
    );

    expect(() => renderer.root.findByType(BrokenComponent))
      .toThrow();
    expect(() => renderer.root.findByType(FallbackError))
      .not.toThrow();
  });
});
