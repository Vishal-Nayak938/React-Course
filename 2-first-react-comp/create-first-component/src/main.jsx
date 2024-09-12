import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import KgButton from './KgButton.jsx'
import Random from './Random.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <KgButton/>
<Random/>
<Random/>
<Random/>
<Random/>
<Random/>
  </StrictMode>,
)
