import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import DailyRentalPage from './components/DailyRentalPage';
import ProjectRentalPage from './components/ProjectRentalPage';
import DocumentsPage from './components/DocumentsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'daily':
        return <DailyRentalPage />;
      case 'project':
        return <ProjectRentalPage />;
      case 'documents':
        return <DocumentsPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
