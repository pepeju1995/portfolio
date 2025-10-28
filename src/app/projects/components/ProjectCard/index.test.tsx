import { render, screen } from '@testing-library/react';
import ProjectCard from './index';
import { Project } from '../../page';

const mockProject: Project = {
  title: 'Test Project',
  role: 'Back-End',
  shortDescription: 'A short description of the project.',
  technologies: ['Node.js', 'Express', 'MongoDB'],
  linkLive: 'https://live.example.com',
  linkRepo: 'https://github.com/example/repo',
  id: 'test-id',
  imageCover: '/img/test.jpg',
};

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project role with correct color', () => {
    render(<ProjectCard project={mockProject} />);
    const role = screen.getByText('Back-End');
    expect(role).toBeInTheDocument();
    expect(role.className).toMatch(/text-blue-600/);
  });

  it('renders project short description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(
      screen.getByText('A short description of the project.')
    ).toBeInTheDocument();
  });

  it('renders all technologies', () => {
    render(<ProjectCard project={mockProject} />);
    mockProject.technologies.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders image placeholder with project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(
      screen.getByText('[Image Placeholder: Test Project]')
    ).toBeInTheDocument();
  });

  it('renders live link with correct href', () => {
    render(<ProjectCard project={mockProject} />);
    const liveLink = screen.getByText(/En Vivo/i).closest('a');
    expect(liveLink).toHaveAttribute('href', mockProject.linkLive);
    expect(liveLink).toHaveAttribute('target', '_blank');
    expect(liveLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders repo link with correct href', () => {
    render(<ProjectCard project={mockProject} />);
    const repoLink = screen.getByText(/Código/i).closest('a');
    expect(repoLink).toHaveAttribute('href', mockProject.linkRepo);
    expect(repoLink).toHaveAttribute('target', '_blank');
    expect(repoLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies correct accent border class for Back-End role', () => {
    render(<ProjectCard project={mockProject} />);
    const roleDecoration = screen.getByTestId('role-decoration');
    expect(roleDecoration.className).toMatch(/text-blue-600/);
  });

  it('applies correct accent border class for Front-End role', () => {
    const frontEndProject = {
      ...mockProject,
      role: 'Front-End' as Project['role'],
    };
    render(<ProjectCard project={frontEndProject} />);
    const roleDecoration = screen.getByTestId('role-decoration');
    expect(roleDecoration.className).toMatch(/text-green-600/);
  });
});
