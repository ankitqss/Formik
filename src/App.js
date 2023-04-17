import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Form from "./Components/Form";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Form />} path="/form" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
