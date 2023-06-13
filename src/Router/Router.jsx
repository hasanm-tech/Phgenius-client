import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllInstructors from "../Pages/AllInstructors/AllInstructor";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoutes";
import Error from "../Pages/Error/Error";
import SelectedClass from "../Pages/Dashboard/selectedClass/selectedClass";
import AddClass from "../Pages/AddClass/AddClass";
import MyClasses from './../Pages/MyClasses/MyClasses';
import ManageClasses from "../Pages/ManageClasses/ManageClasses";

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

        {
          path: 'login',
          element: <Login></Login>
        },

        {
        path: 'register',
        element: <Register></Register>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'selected-classes',
          element: <SelectedClass></SelectedClass>
        },
        {
          path: 'add-class',
          element: <AddClass></AddClass>
        },
        {
          path: 'my-classes',
          element: <MyClasses></MyClasses>
        },
        {
          path: 'manage-classes',
          element: <ManageClasses></ManageClasses>
        }
      ]
     },
     {
      path: '*',
      element: <Error></Error>
    }

  ]);