import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/features/home/pages/HomePage";
import { ROUTES } from "./paths";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
]);