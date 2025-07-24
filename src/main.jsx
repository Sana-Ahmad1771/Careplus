import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
  once: false,         // ⬅️ animate every time element enters view
  duration: 1000,   
  mirror:true,   
 // animation speed (ms)
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
