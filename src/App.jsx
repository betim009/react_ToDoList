import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Create from "./pages/create";
import LayOut from "./components/Layout";
import './App.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/*" element={<h2>not found</h2>} />
        </Route>
      </Routes>
    </>
  );
}
