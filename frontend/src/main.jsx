import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AddWords from './pages/AddWords.jsx'
import Game from './pages/Game.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addWords",
    element: <AddWords />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
