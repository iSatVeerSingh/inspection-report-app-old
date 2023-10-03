import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import JobDetails from "../pages/jobs/JobDetails";
import Jobs from "../pages/jobs/Jobs";
import CreateCustomJob from "../pages/jobs/CreateCustomJob";
import Reports from "../pages/Reports";
import LibraryItems from "../pages/LibraryItems";
import InspectionNotes from "../pages/InspectionNotes";
import Users from "../pages/Users";
import Emails from "../pages/Emails";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import * as Routes from "./paths";
import JobSummary from "../pages/jobs/JobSummary";
import AddInspectionNotes from "../pages/jobs/AddInspectionNotes";
import AddInspectionItems from "../pages/jobs/AddInspectionItems";

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // element: <Jobs />,
        element: <AddInspectionItems />
      },
      {
        path: Routes.JOBS_DETAILS,
        element: <JobDetails />,
      },
      {
        path: Routes.CUSTOM_JOB,
        element: <CreateCustomJob />,
      },
      {
        path: Routes.JOB_SUMMARY,
        element: <JobSummary />,
      },
      {
        path: Routes.ADD_INSPECTION_NOTES,
        element: <AddInspectionNotes />,
      },
      {
        path: Routes.REPORTS,
        element: <Reports />,
      },
      {
        path: Routes.LIBRARY_ITEMS,
        element: <LibraryItems />,
      },
      {
        path: Routes.INSPECTION_NOTES,
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
