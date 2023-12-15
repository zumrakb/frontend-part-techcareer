import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Creation from "./pages/Creation";
import SelectedCountry from "./pages/SelectedCountry";
import EditingCountry from "./pages/EditingCountry";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create" element={<Creation />}></Route>
      <Route path="/blog/:id" element={<SelectedCountry />}></Route>
      <Route path="/blog/:id/edit" element={<EditingCountry />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
