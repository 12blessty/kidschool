import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

//Imports of custom components
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Error from "./error/Error";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Classes from "./pages/Classes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="classes" element={<Classes />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
