import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const headerStyle = {
  fontSize: '1rem', // text-1xl
  fontWeight: 'bold',  // font-bold
  textDecoration: 'underline', // underline
};

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        Edit <code>src/App.tsx</code> and save to test HMR
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p style={headerStyle}>Vite + React</p>
      <div className="card"></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
