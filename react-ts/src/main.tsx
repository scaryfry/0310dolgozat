import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import * as Sentry from "@sentry/react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllChamp from './Pages/AllChamp';
import CreateChamp from './Pages/CreateChamp';
import 'bootstrap/dist/css/bootstrap.min.css'

Sentry.init({
  dsn: "https://6c64dafaf99f5d86dc8601205d8ccb97@o4510912039288832.ingest.de.sentry.io/4511019627905104",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<AllChamp></AllChamp>}></Route>
    <Route path='/add' element={<CreateChamp></CreateChamp>}></Route>
  </Routes>
  </BrowserRouter>
  <ToastContainer></ToastContainer>
  </StrictMode>,
)
