import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from './Router.jsx'
import React from 'react';
import BlogContext, { BlogProvider } from "./context/BlogContext";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BlogProvider>
      <RouterProvider router={router} />
  </BlogProvider>
  </React.StrictMode>
)