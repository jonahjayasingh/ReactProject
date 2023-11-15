import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigation/navigation.components";
import Authentication from "./routes/Authentication/Authentication.components";
import Shop from "./routes/shop/shop.components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
