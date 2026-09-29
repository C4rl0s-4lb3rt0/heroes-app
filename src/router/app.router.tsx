import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
// import { SearhcPage } from "@/heroes/pages/search/SearhcPage";

const SearhcPage = lazy(() => import("@/heroes/pages/search/SearhcPage"));

export const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <HeroesLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/heroes/:idSlug",
                element: <HeroPage />,
            },
            {
                path: "/search",
                element: <SearhcPage />,
            },  
            {
                path:"*",
                element: <Navigate to="/" />,
            }
        ]
    },
    {
        path:'/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminPage />,
            },
        ]
    }
]);