import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { HeadingComponent } from "./components/HeadingComponent";
import { Body } from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet  } from "react-router-dom";
import './index.css';
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import {Provider} from 'react-redux'
import store from "./utils/store";
import Cart from "./components/Cart";

const InstaMart = lazy(()=>import('./components/InstaMart'))

const AppLayout =()=>{

  const [user,setUser]=useState({
    name:'Mohammad Bilal',
    age:24
  })
  return(
  <Provider store = {store}>
  <UserContext.Provider value={{
    user:user,
    setUser : setUser
  }}>

 
  <HeadingComponent/>
  <Outlet/>
  <Footer/>
   </UserContext.Provider>
  </Provider>
)}

const appRouter = createBrowserRouter ([

  {
    path : "/",
    element : <AppLayout/>,
    errorElement : <Error/>,
    children: [
                  {
                    path : "/",
                    element : <Body/>
                  },
                  {
                    path : "/about",
                    element : <About/>,
                    children:[{
                      path :"profile",
                      element: <Profile/>
                    }]
                    },
                    {
                      path : '/contact',
                      element : <Contact/>
                    },
                    {
                      path : '/restaurant/:id',
                      element: <RestaurantMenu/>
                    },
                    {
                      path : '/login',
                      element : <Login/>
                   },
                   {
                    path :'/instamart',
                    element :<Suspense fallback={<Shimmer/>}><InstaMart/></Suspense>
                   },
                   {
                    path :'/cart',
                    element: <Cart/>
                   }
               ]
}
])


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
root.render(<RouterProvider router={appRouter} />);