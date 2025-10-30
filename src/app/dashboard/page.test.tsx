import { render, screen } from '@testing-library/react';
import Dashboard from './page';

describe('Dashboard', () => {
  it('renders the hero section with name and title', () => {
    render(<Dashboard />);
    expect(
      screen.getByRole('heading', { name: /hola, soy/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /desarrollador full-stack/i })
    ).toBeInTheDocument();
  });

  it('renders the introduction paragraph', () => {
    render(<Dashboard />);
    expect(screen.getByText(/4 años de experiencia/i)).toBeInTheDocument();
  });

  it('renders the "Ver Proyectos Backend" and "Contáctame" links', () => {
    render(<Dashboard />);
    expect(
      screen.getByRole('link', { name: /ver proyectos backend/i })
    ).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: /contáctame/i })).toHaveAttribute(
      'href',
      '/contact'
    );
  });

  it('renders the "Tecnologías Clave y Stack Principal" section', () => {
    render(<Dashboard />);
    expect(
      screen.getByRole('heading', {
        name: /tecnologías clave y stack principal/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/back-end & lógica/i)).toBeInTheDocument();
    expect(screen.getByText(/datos & infraestructura/i)).toBeInTheDocument();
    expect(screen.getByText(/front-end & ui/i)).toBeInTheDocument();
  });

  it('renders the "Mis Proyectos Más Recientes" section', () => {
    render(<Dashboard />);
    expect(
      screen.getByRole('heading', { name: /mis proyectos más recientes/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/échale un vistazo a las soluciones/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/proyecto a/i)).toBeInTheDocument();
  });

  it('renders the "Ver Todos los Proyectos" link', () => {
    render(<Dashboard />);
    expect(
      screen.getByRole('link', { name: /ver todos los proyectos/i })
    ).toHaveAttribute('href', '/projects');
  });
});
