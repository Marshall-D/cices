import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetails from "./pages/UserDetails";

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
