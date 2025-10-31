import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function Dashboard() {
  return (
    <div className="min-h-screen" data-testid="dashboard">
      <Header />

      <Skills />

      <Projects />
    </div>
  );
}
