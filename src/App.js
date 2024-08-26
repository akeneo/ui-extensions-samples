import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {EditCategory, EditProduct, Home} from "./pages/index.js";

const router = createBrowserRouter([
  {path: "/", element: <Home/>},
  {path: "/edit_product_tab", element: <EditProduct/>},
  {path: "/edit_category_tab", element: <EditCategory/>},
]);

function App() {
  return <RouterProvider router={router}/>;
}


export default App;
