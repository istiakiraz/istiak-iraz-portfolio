import { createBrowserRouter } from "react-router";

import HomePage from "../pages/HomePage";
import Mainlayouts from "../layouts/Mainlayouts";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Mainlayouts,
        children:[
            {
                index: true,
                Component: HomePage
            }
        ]
    }
])