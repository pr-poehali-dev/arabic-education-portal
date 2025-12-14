import { useState } from 'react';
import { Header } from '@/components/Header';
import { HomePage } from '@/components/HomePage';
import { AboutPage } from '@/components/AboutPage';
import { CoursesPage } from '@/components/CoursesPage';
import { SchedulePage } from '@/components/SchedulePage';
import { ContactsPage } from '@/components/ContactsPage';
import { StudentDashboard } from '@/components/StudentDashboard';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentSection('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentSection('home');
  };

  const renderContent = () => {
    if (isLoggedIn && currentSection === 'dashboard') {
      return <StudentDashboard onLogout={handleLogout} />;
    }

    switch (currentSection) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'courses':
        return <CoursesPage />;
      case 'schedule':
        return <SchedulePage />;
      case 'contacts':
        return <ContactsPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      {(!isLoggedIn || currentSection !== 'dashboard') && (
        <Header 
          onNavigate={handleNavigate} 
          currentSection={currentSection}
          onLoginClick={handleLogin}
        />
      )}
      {renderContent()}
    </div>
  );
};

export default Index;
