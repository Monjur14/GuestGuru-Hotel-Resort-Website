import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Sections/Home.jsx'
import DetailsPage from './Components/DetailsPage.jsx'
import NotFound from './Components/NotFound.jsx'
import Login from './Components/Login.jsx'
import RegisterPage from './Components/RegisterPage.jsx'
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx'
import UserProfile from './Sections/UserProfile.jsx'
import ContactUs from './Sections/ContactUs.jsx'
import UpdateProfile from './Sections/UpdateProfile.jsx'
import Reviews from './Components/Reviews.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/details/:id",
        element: <DetailsPage/>
      },
      // {
      //   path: '*',
      //   element: <NotFound/>
      // },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <RegisterPage/>
      },
      {
        path: "/userProfile",
        element: <UserProfile/>
      },
      {
        path: "/contactus",
        element: <ContactUs/>
      },
      {
        path: "/updateprofile",
        element: <UpdateProfile/>
      },
      {
        path: "/reviews",
        element: <Reviews/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router}/>
    </FirebaseProvider>
  </React.StrictMode>
)
