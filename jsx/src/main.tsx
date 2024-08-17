import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PgLite } from './PgLite.tsx'

createRoot(document.getElementById('main')!).render(
  <StrictMode>
    {/* <App /> */}
    <PgLite />
  </StrictMode>,
)
