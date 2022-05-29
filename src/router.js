import { Routes, Route } from "react-router-dom";
import Books from "./components/Books/Books";
import Popular from "./components/Popular/Popular";
import Profile from "./components/Profile/Profile";

const Routers = () => {
  <Routes>
    {/* <Route path="/" element={<App />} /> */}
    {/* <Route index element={<Home />} /> */}
    <Route path="popular" element={<Popular />} />
    <Route path="profile" element={<Profile />} />
    <Route path="/" element={<Books />} />
    {/* Using path="*"" means "match anything", so this route
    acts like a catch-all for URLs that we don't have explicit
    routes for. */}
    {/* <Route path="*" element={<NoMatch />} /> */}
  </Routes>;
};

export default Routers;
