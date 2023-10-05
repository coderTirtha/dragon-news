import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'
import AuthProviders from './AuthProviders/AuthProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={routes} />
    </AuthProviders>
  </React.StrictMode>,
)
