import React from 'react';
import { render, act } from '@testing-library/react';
import { ViewportProvider, useViewport } from './index';

const TestComponent = () => {
  const { isDesktop } = useViewport();
  return <span data-testid="viewport">{isDesktop ? 'desktop' : 'mobile'}</span>;
};

describe('ViewportProvider', () => {
  let matchMediaMock: jest.SpyInstance;

  beforeEach(() => {
    if (!window.matchMedia) {
      window.matchMedia = jest.fn();
    }
    matchMediaMock = jest.spyOn(window, 'matchMedia');
  });

  afterEach(() => {
    if (matchMediaMock) {
      matchMediaMock.mockReset();
    }
  });

  it('provides isDesktop=true when window width >= 1024px', () => {
    const listeners: Array<(e: MediaQueryListEvent) => void> = [];
    matchMediaMock.mockImplementation((query: string) => ({
      matches: true,
      media: query,
      addEventListener: (_: string, cb: (e: MediaQueryListEvent) => void) =>
        listeners.push(cb),
      removeEventListener: jest.fn(),
      onchange: null,
      dispatchEvent: jest.fn(),
    }));

    const { getByTestId } = render(
      <ViewportProvider>
        <TestComponent />
      </ViewportProvider>
    );
    expect(getByTestId('viewport').textContent).toBe('desktop');
  });

  it('provides isDesktop=false when window width < 1024px', () => {
    matchMediaMock.mockImplementation((query: string) => ({
      matches: false,
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      onchange: null,
      dispatchEvent: jest.fn(),
    }));

    const { getByTestId } = render(
      <ViewportProvider>
        <TestComponent />
      </ViewportProvider>
    );
    expect(getByTestId('viewport').textContent).toBe('mobile');
  });

  it('updates isDesktop on media query change', () => {
    let listener: ((e: MediaQueryListEvent) => void) | undefined;
    let matches = false;
    matchMediaMock.mockImplementation((query: string) => ({
      matches,
      media: query,
      addEventListener: (_: string, cb: (e: MediaQueryListEvent) => void) => {
        listener = cb;
      },
      removeEventListener: jest.fn(),
      onchange: null,
      dispatchEvent: jest.fn(),
    }));

    const { getByTestId } = render(
      <ViewportProvider>
        <TestComponent />
      </ViewportProvider>
    );
    expect(getByTestId('viewport').textContent).toBe('mobile');

    act(() => {
      matches = true;
      listener && listener({ matches: true } as MediaQueryListEvent);
    });

    expect(getByTestId('viewport').textContent).toBe('desktop');
  });
});
