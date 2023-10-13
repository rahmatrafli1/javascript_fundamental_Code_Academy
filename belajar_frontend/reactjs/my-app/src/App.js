import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/share/layout";
import Home from "./components/pages/classcomponent";
import FunctionComponent from "./components/pages/functcomponent";
import Listproduct from "./components/pages/listproduct";
import Parent from "./components/pages/parent";
import Calccomponent from "./components/pages/calccomponent";
import User from "./components/pages/user";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="fungsikomponen" element={<FunctionComponent />} />
            <Route path="listproduct" element={<Listproduct />} />
            <Route path="parent" element={<Parent />} />
            <Route path="calculator" element={<Calccomponent />} />
            <Route path="user" element={<User />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
