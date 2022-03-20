import { Route, Routes } from "react-router-dom";
import { Home, InfoProduct, Layaut, Wishlist } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layaut />}>
        <Route index element={<Home />} />
        <Route path="wishlist/:id" element={<Wishlist />}/>
        <Route path="info/:id" element={<InfoProduct />}/>
      </Route>
    </Routes>
  );
}

export default App;
