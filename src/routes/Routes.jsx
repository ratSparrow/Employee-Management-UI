import { createBrowserRouter } from "react-router-dom";
import AddNewEmployee from "../pages/AddNewEmployee";

const router =  createBrowserRouter([
    {
        path:"/",
        element:<AddNewEmployee/>
    }
])

export default router