import { Route, useLocation, Routes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import CheckDevice from "pages/CheckDevice";


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/*    LANDING PAGE */}
        <Route path="/" element={<CheckDevice />} />
        {/*  SA */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
