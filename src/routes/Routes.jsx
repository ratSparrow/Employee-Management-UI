import { createBrowserRouter } from "react-router-dom";
import AddNewEmployee from "../pages/AddNewEmployee";
import AllEmployees from "../pages/AllEmployees";

const router =  createBrowserRouter([
    {
        path:"/",
        element:<AllEmployees/>
    },
    {
        path:"/employee/add",
        element:<AddNewEmployee/>
    },
    {
        path:"/employee/add/:id",
        element:<AddNewEmployee/>
    }
])

export default router