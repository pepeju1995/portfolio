import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillsPage from './page';

jest.mock('./components/SkillCategory', () => ({
  SkillCategoryComponent: ({
    category,
    skills,
  }: {
    category: string;
    skills: any[];
  }) => (
    <div data-testid="skill-category">
      <span>{category}</span>
      <ul>
        {skills.map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </div>
  ),
}));

describe('SkillsPage', () => {
  it('renders the main title', () => {
    render(<SkillsPage />);
    expect(
      screen.getByRole('heading', { name: /mi stack tecnológico/i })
    ).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    render(<SkillsPage />);
    expect(screen.getAllByTestId('skill-category')).toHaveLength(3);
    expect(screen.getByText('Back-End')).toBeInTheDocument();
    expect(screen.getByText('Front-End')).toBeInTheDocument();
    expect(screen.getByText('Databases')).toBeInTheDocument();
  });

  it('renders all skills under their categories', () => {
    render(<SkillsPage />);
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('Python (Django/Flask)')).toBeInTheDocument();
    expect(screen.getByText('React/Next.js')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
  });
});
