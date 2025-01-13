import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <iframe
             src="http://192.168.1.224:3030/probe?tab=group1" 
             width="1920px" 
             height="1080px" 
             title="chubu probe"
             >
    </iframe> */}
  </StrictMode>,
)
