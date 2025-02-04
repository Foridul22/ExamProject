import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RouteLayout from "./routeLayout/RouteLayout";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Contact from "./pages/Contact";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RouteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
