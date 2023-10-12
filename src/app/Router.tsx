import React, { Suspense, lazy } from 'react'
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AppSpinner } from 'features/AppSpinner'

const DashboardPage = lazy(() => import('pages/DashboardPage').then((module) => ({ default: module.DashboardPage })))

export const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <DashboardPage />,
        },
        {
            path: '*',
            element: <Navigate to="/404" />,
        },
    ]);
    return (
        <Suspense fallback={<AppSpinner />}>
            <RouterProvider router={router} />
        </Suspense>
    );
};
