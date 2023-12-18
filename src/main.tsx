import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeComponent from "./pages/home/home.tsx";
import ProfileComponent from "./pages/profile/profile.tsx";
import ErrorPage from "./pages/error/error.tsx";
import NotFoundPage from "./pages/not-found/not-found.tsx";

const router = createBrowserRouter([
  {
    path: "/cats-gallery",
    element: <HomeComponent />,
    errorElement: <ErrorPage />
  },
  {
    path: "/cats-gallery/profile/:profileId",
    element: <ProfileComponent />,
    errorElement: <ErrorPage />
  },
  {
    path: "/cats-gallery/home",
    element: <HomeComponent />,
    errorElement: <ErrorPage />
  },
  {
    path: "*",
    element: <NotFoundPage />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
