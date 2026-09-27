import { lazy } from "react";
import { createBrowserRouter } from "react-router";

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
                path: "/heroes/1",
                element: <HeroPage />,
            },
            {
                path: "/search",
                element: <SearhcPage />,
            },  
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