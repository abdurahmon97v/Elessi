import { Route, Routes } from "react-router-dom";
import { Home, Layaut, Wishlist } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layaut />}>
        <Route index element={<Home />} />
        <Route path="wishlist" element={<Wishlist />}/>
      </Route>
    </Routes>
  );
}

export default App;
