import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import GlobalHeader from './components/layout/GlobalHeader';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalHeader />
      <Router />
    </BrowserRouter>
  );
}
