import { createRoot } from 'react-dom/client';
import '../src/app/styles/global.css';
import { App } from './app/App';

createRoot(document.getElementById('root')!).render(<App />);
