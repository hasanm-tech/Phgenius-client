import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllInstructors from "../Pages/AllInstructors/AllInstructor";
import AllClasses from "../Pages/AllClasses/AllClasses";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '',
            element: <Home></Home>
        },
        {
            path: 'all-instructor',
            element: <AllInstructors></AllInstructors>
        },
        {
            path: 'all-classes',
            element: <AllClasses></AllClasses>
        },
      ]
    },
  ]);