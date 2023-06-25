import './App.css';
import Agreement from './Components/Agreement/Agreement';
import Base from "./Body/Base";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route exact path="/" element={<Base/>}></Route>
          <Route exact path="/agreement" element={<Agreement />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
