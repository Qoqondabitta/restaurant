import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import Root from './root'

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
  </StrictMode>
);
