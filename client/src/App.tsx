import { BrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import router from "./router";

function App() {
  return (
    <div className="font-primary">
      {/* <Dashboard /> */}
      {/* <Login/> */}
      {/* <Register /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
