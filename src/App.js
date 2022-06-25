import { Routes, Route } from "react-router-dom";
import Popular from "./components/Popular/Popular.tsx";
import Profile from "./components/Profile/Profile";
import Layout from "./components/Layout/Layout";
import Books from "./components/Books/Books";

function App() {
  return (
    <Layout>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        {/* <Route index element={<Home />} /> */}
        <Route path="/" element={<Books />} />
        <Route path="popular" element={<Popular />} />
        <Route path="profile" element={<Profile />} />
        {/* Using path="*"" means "match anything", so this route
  acts like a catch-all for URLs that we don't have explicit
  routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
