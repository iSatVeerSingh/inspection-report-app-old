import ErrorPage from "./pages/ErrorPage";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reports from "./pages/Reports";
import RootLayout from "./components/RootLayout";
import LibraryItems from "./pages/LibraryItems";
import InspectionNotes from "./pages/InspectionNotes";
import Users from "./pages/Users";
import Emails from "./pages/Emails";
import Settings from "./pages/Settings";
import JobDetails from "./pages/JobDetails";
import CreateCustomJob from "./pages/CreateCustomJob";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Jobs />,
        },
        {
          path: "/jobs/:jobNumber",
          element: <JobDetails />,
        },
        {
          path: "/jobs/custom-job",
          element: <CreateCustomJob />,
        },
        {
          path: "/reports",
          element: <Reports />,
        },
        {
          path: "/library-items",
          element: <LibraryItems />,
        },
        {
          path: "/inspection-notes",
          element: <InspectionNotes />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/emails",
          element: <Emails />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
