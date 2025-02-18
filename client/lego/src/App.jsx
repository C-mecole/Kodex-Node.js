import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import GetAndPost from "./pages/GetAndPost";
import Forms from "./pages/Forms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GetAndPost />} />
      <Route path="/forms" element={<Forms />} />
    </Routes>
  );
}

export default App;
