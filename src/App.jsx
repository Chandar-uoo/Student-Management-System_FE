import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { DashBoard } from "./pages/DashBoard";
import { StudentFormWrapper } from "./pages/StudentFormWrapper";
import { StudentDetail } from "./pages/StudentDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<DashBoard />} />
          <Route path="/student-form" element={<StudentFormWrapper />} />
          <Route path="/student" element={<StudentDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
