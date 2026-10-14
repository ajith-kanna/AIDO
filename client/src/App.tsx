import { BrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import router from "./router";
import LoadingScreen from "./components/common/LoadingScreen";

function App() {
  return (
    <div className="font-primary">
      {/* <Dashboard /> */}
      {/* <Login/> */}
      {/* <Register /> */}
      {/* <LoadingScreen/> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
