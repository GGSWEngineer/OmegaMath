import { Navigate, createBrowserRouter, useRouteError } from "react-router-dom";
import { Home } from "./pages/Home";
import { Teachers } from "./pages/Teachers";
import { RootLayout } from "./layouts/RootLayout";
import { Students } from "./pages/Students";
import { About } from "./pages/About";
import { FAQs } from "./pages/FAQs";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          { path: "teachers", element: <Teachers /> },
          { path: "students", element: <Students /> },
          { path: "about", element: <About /> },
          { path: "faq", element: <FAQs /> },
          { path: "contact", element: <Contact /> },
        ],
      },
    ],
  },
]);

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <h1>Error - Something went wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  );
}
