import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

//own imports
import {Router, RouterProvider, createBrowserRouter} from "react-router-dom"

import Posts from './pages/Posts.jsx'
import Chat from './pages/Chat.jsx'
import Register from './pages/Register.jsx'
import General from './pages/General/General.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <General/>,
    children: [
      {
        index: true,
        element: <Register/>
      },
      {
        path: '/posts',
        element: <Posts/>
      },{
        path: '/chat',
        element: <Chat/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
