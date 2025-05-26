import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// Import Amplify UI global styles
import '@aws-amplify/ui-react/styles.css';
// import ReactDOM from 'react-dom/client';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
