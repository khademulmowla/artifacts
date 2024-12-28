import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import router from './routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster position='top-right' reverseOrder={false}></Toaster>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
