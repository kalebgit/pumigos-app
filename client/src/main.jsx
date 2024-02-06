import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

//own imports
import {Router, RouterProvider, createBrowserRouter} from "react-router-dom"
import General from './pages/General/General.jsx'
import Posts from './pages/posts.jsx'
import Chat from './pages/Chat.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <General/>,
    children: [
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
