import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from './index';

jest.mock('next-themes', () => ({
  ThemeProvider: ({ children, ...props }: any) => (
    <div
      data-testid="next-themes-provider"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </div>
  ),
}));

describe('ThemeProvider', () => {
  it('renders children', () => {
    const { getByText } = render(
      <ThemeProvider>
        <span>Test Child</span>
      </ThemeProvider>
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });
});
