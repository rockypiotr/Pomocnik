import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Paperbase from "./Paperbase";

function App() {
  return (
    <>
      <BrowserRouter>
        <Paperbase />
      </BrowserRouter>
    </>
  );
}

export default App;
