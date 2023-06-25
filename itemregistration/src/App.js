import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemRegistration from "./ItemRegistration/ItemRegistration";
import Base from "./Body/Base";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Base/>}></Route>
          <Route exact path="/additem" element={<ItemRegistration />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
