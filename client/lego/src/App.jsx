import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import GetAndPost from "./pages/GetAndPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GetAndPost />} />
    </Routes>
  );
}

export default App;
