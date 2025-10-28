import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from './page';

jest.mock('./components/ContactForm', () => () => (
  <div data-testid="contact-form" />
));

describe('ContactPage', () => {
  it('renders the main heading', () => {
    render(<ContactPage />);
    expect(
      screen.getByRole('heading', { name: /ponte en contacto/i })
    ).toBeInTheDocument();
  });

  it('renders the contact form section', () => {
    render(<ContactPage />);
    expect(
      screen.getByRole('heading', { name: /envíame un mensaje/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });

  it('renders the contact info section', () => {
    render(<ContactPage />);
    expect(
      screen.getByRole('heading', { name: /información de contacto/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/¿tienes un proyecto en mente/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/tu\.correo\.profesional@ejemplo\.com/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/\+34 123 45 67 89/)).toBeInTheDocument();
    expect(screen.getByText(/madrid, españa/i)).toBeInTheDocument();
  });

  it('renders social links with correct aria-labels', () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/github/i)).toBeInTheDocument();
  });
});
