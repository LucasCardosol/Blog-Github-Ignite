import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Publication } from "./pages/Publication";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/publication/:number" element={<Publication />}></Route>
    </Routes>
  );
}
