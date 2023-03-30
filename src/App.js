import { RouterProvider } from "./utils/lib";
import "./styles.css";
import router from "./routes";

export default function App() {
  return <RouterProvider router={router} />;
}
