import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EMAIL_ADDRESS, Footer, GITHUB_URL, LINKEDIN_URL } from '.';
import { SVGProps } from 'react';

interface MockIconProps extends SVGProps<SVGSVGElement> {}

jest.mock('react-icons/fa', () => ({
  FaGithub: (props: MockIconProps) => (
    <svg data-testid="github-icon" {...props} />
  ),
  FaLinkedin: (props: MockIconProps) => (
    <svg data-testid="linkedin-icon" {...props} />
  ),
  FaEnvelope: (props: MockIconProps) => (
    <svg data-testid="envelope-icon" {...props} />
  ),
}));

describe('Footer', () => {
  it('renders social icons', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('github-icon')).toBeInTheDocument();
    expect(getByTestId('linkedin-icon')).toBeInTheDocument();
    expect(getByTestId('envelope-icon')).toBeInTheDocument();
  });

  it('renders correct links and mailto', () => {
    const { getByLabelText } = render(<Footer />);
    expect(getByLabelText('GitHub').getAttribute('href')).toBe(GITHUB_URL);
    expect(getByLabelText('LinkedIn').getAttribute('href')).toBe(LINKEDIN_URL);
    expect(getByLabelText('Correo Electrónico').getAttribute('href')).toBe(
      `mailto:${EMAIL_ADDRESS}`
    );
  });

  it('renders copyright with current year', () => {
    const { getByText } = render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      getByText(new RegExp(`© ${year} Jose Juan Pérez González.`))
    ).toBeInTheDocument();
  });

  it('has correct aria-labels for accessibility', () => {
    const { getByLabelText } = render(<Footer />);
    expect(getByLabelText('GitHub')).toBeInTheDocument();
    expect(getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(getByLabelText('Correo Electrónico')).toBeInTheDocument();
  });
});
