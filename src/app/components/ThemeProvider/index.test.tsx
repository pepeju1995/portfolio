import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from './index';

jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-theme-provider">{children}</div>
  ),
  useTheme: () => ({ theme: 'light', setTheme: jest.fn() }),
}));

describe('ThemeProvider', () => {
  it('renders children and uses the mock provider', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider>
        <span>Test Child</span>
      </ThemeProvider>
    );

    expect(getByText('Test Child')).toBeInTheDocument();
    expect(getByTestId('mock-theme-provider')).toBeInTheDocument();
  });
});
