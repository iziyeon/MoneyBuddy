import { BrowserRouter, useLocation } from 'react-router-dom';
import Router from './routes/Router';
import GlobalHeader from './components/layout/GlobalHeader';

function AppContent() {
  const location = useLocation();
  const hideHeader = ['/login', '/signup'].includes(location.pathname);

  return (
    <>
      {!hideHeader && <GlobalHeader />}
      <Router />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
