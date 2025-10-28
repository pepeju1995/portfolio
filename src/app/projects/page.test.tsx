import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProjectsPage from './page';

jest.mock('./components/ProjectCard', () => (props: any) => (
  <div data-testid="project-card">{props.project.title}</div>
));

describe('ProjectsPage', () => {
  it('renders the section and heading', async () => {
    render(<ProjectsPage />);
    await waitFor(() =>
      expect(
        screen.getByRole('heading', { name: /Portafolio de Proyectos/i })
      ).toBeInTheDocument()
    );
    expect(
      screen.getByText(/Destacando sistemas escalables/i)
    ).toBeInTheDocument();
  });

  it('renders all project cards', async () => {
    render(<ProjectsPage />);
    await waitFor(() => {
      const cards = screen.getAllByTestId('project-card');
      expect(cards).toHaveLength(3);
      expect(cards[0]).toHaveTextContent('E-Commerce API');
      expect(cards[1]).toHaveTextContent('Plataforma de Gestión');
      expect(cards[2]).toHaveTextContent('Landing Page Animada');
    });
  });
});
