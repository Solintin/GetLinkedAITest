import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AnimatedRoutes from "./Routes";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App: FC = () => {
  // py-8 px-5
  return (
    <div className="w-full font-main bg-[#F8F9FB] fixed h-screen overflow-y-auto">
      <Router>
        <AnimatedRoutes />
        <ToastContainer autoClose={2500} hideProgressBar theme="colored" />
      </Router>
    </div>
  );
};

export default App;
