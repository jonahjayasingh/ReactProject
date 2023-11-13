import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigation/navigation.components";
import Authentication from "./routes/Authentication/Authentication.components";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return <h2>Start Shopping</h2>;
};

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
