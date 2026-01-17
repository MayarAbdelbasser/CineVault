import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Root from "./Root/Root";
import HomePage from "./HomePage/HomePage";
import Movies from "./Movies/Movies";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
