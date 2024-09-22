import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import { PgLite } from './PgLite.tsx'

createRoot(document.getElementById('main')!).render(
  <StrictMode>
    <h3>App.tsx</h3>
    <App />
    <br />
    <h3>PgLite.tsx</h3>
    <PgLite />
  </StrictMode>,
)
