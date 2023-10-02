'use client';

import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      Error 404 Not found
    </div>
  )
};

export default ErrorPage;