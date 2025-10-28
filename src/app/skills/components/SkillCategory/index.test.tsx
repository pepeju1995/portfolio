import React from 'react';
import { render, screen } from '@testing-library/react';
import { SkillCategoryComponent } from './index';

describe('SkillCategoryComponent', () => {
  const skills = [
    { name: 'React', level: 4, category: 'Front-End' },
    { name: 'TypeScript', level: 5, category: 'Front-End' },
    { name: 'CSS', level: 3, category: 'Front-End' },
  ];

  it('renders the category title', () => {
    render(<SkillCategoryComponent category="Front-End" skills={skills} />);
    expect(screen.getByText('Front-End')).toBeInTheDocument();
  });

  it('renders all skill names', () => {
    render(<SkillCategoryComponent category="Front-End" skills={skills} />);
    skills.forEach((skill) => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
    });
  });

  it('applies correct accent color for Front-End category', () => {
    const { container } = render(
      <SkillCategoryComponent category="Front-End" skills={skills} />
    );
    expect(container.firstChild).toHaveClass('border-green-600');
  });

  it('applies correct accent color for Databases category', () => {
    const dbSkills = [{ name: 'PostgreSQL', level: 4, category: 'Databases' }];
    const { container } = render(
      <SkillCategoryComponent category="Databases" skills={dbSkills} />
    );
    expect(container.firstChild).toHaveClass('border-yellow-500');
  });

  it('applies default accent color for unknown category', () => {
    const otherSkills = [{ name: 'Docker', level: 2, category: 'DevOps' }];
    const { container } = render(
      <SkillCategoryComponent category="DevOps" skills={otherSkills} />
    );
    expect(container.firstChild).toHaveClass('border-blue-600');
  });
});
