
import { createHashRouter } from "react-router-dom";
import FrontendLayout from "../layout/FrontendLayout";
import Home from "../pages/Home";

const router = createHashRouter([
  {
    path: "/",
    element: <FrontendLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
