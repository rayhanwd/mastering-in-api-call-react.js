import { createBrowserRouter } from "../utils/lib";
import { Home, About, Contact } from "../pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "about/",
    element: <About />
  },
  {
    path: "contact/",
    element: <Contact />
  }
]);

export default router;
