import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar.jsx';
import Header from './components/header/Header.jsx';
import Errorpage from './components/error/Errorpage.jsx';
import ListedBooks from './components/Llistedbook/ListedBooks.jsx';
import PagetoRead from './components/pagetoread/PagetoRead.jsx';
import Banner from './components/navbar/Banner.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
         path:'/list',
         element:<ListedBooks></ListedBooks>
      },
      {
        path:'/page',
        element:<PagetoRead></PagetoRead>
      },
      {
        path:'/',
        element:<Banner></Banner>,
        loader: ()=>fetch('books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
