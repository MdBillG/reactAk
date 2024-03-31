import React from "react";
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

const AppLayout =()=>{
  return(
  <>
  <HeadingComponent/>
  <Outlet/>
  <Footer/>
  </>
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
                                        }
               ]
}
])


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
root.render(<RouterProvider router={appRouter} />);