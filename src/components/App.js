import React from "react";
import ReactDOM from "react-dom/client";
import { HeadingComponent } from "./HeadingComponent";
import { Body } from "./Body";
import Footer from "./Footer";
import About from "./About";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const AppLayout =()=>{
  return(
  <>
  <HeadingComponent/>
  <Body/>
  <Footer/>
  </>
)}

const appRouter = createBrowserRouter ([
  {
    path : "/",
    element : <AppLayout/>,
  },
  {
  path : "/about",
  element : <About/>
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);