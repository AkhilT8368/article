import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Loadable from "./loadable";

const Layout = Loadable(lazy(() => import("src/layout/layout")));
const Home = Loadable(lazy(() => import("src/page/home/home")));
const Source = Loadable(
  lazy(() => import("src/page/source-filter/source-filter"))
);
const Error404 = Loadable(lazy(() => import("src/route/error-404")));
const getRoutes = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to="/home" /> },
        { path: "home", element: <Home /> },
        { path: "source", element: <Source /> },
      ],
    },
    { path: "*", element: <Error404 /> }, // Catch-all route for 404 errors
  ];
  return routes;
};
const Router = () => {
  return useRoutes(getRoutes());
};

export default Router;
