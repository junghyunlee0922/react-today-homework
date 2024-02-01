import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Zicoba from './App';
import './styles/tailwind.css';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Zicoba />
  </StrictMode>
);

