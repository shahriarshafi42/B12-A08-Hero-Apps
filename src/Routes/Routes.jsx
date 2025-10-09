import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Apppages from '../Pages/Apppspages/Apppages';
import Installation from '../Pages/Installation/Installation';
import Installedapps from '../Installedapps/Installedapps';
import Spinner from '../Componanats/Spinner/Spinner';




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Spinner></Spinner>,
    children: [
      {
        index: true,
        loader: () => fetch('../AppsData.Json'),

        path: '/',
        Component: Home
      },
      {
        path: '/apps',
        loader: () => fetch('../AppsData2.json'),

        Component: Apppages
      },
      {
        path: '/Installedapps',
        loader: () => fetch('../AppsData2.json'),

        Component: Installedapps
      },
      {
        path: '/Installation/:id',
        loader: () => fetch('../AppsData2.json'),
    

        Component: Installation,

      },
     
    ]
  },
]);
