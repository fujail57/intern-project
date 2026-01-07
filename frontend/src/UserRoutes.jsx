import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import { AddContactForm } from "./contact/AddContactForm";
import { PageNotFound } from "./component/PageNotFound";
import { ViewContact } from "./component/ViewContact";
import { DeleteContactForm } from "./component/DeleteContactForm";

const router = createBrowserRouter([
  {
    path: "/add",
    element: <AddContactForm />,
  },
  {
    path: "/view",
    element: <ViewContact />,
  },
  {
    path: "/delete",
    element: <DeleteContactForm />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const UserRoutes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default UserRoutes;
