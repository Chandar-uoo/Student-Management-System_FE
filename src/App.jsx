import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { DashBoard } from "./pages/DashBoard";
import { StudentFormWrapper } from "./pages/StudentFormWrapper";
import { StudentDetail } from "./pages/StudentDetail";
import { ToastContainer, Bounce } from "react-toastify";

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
       <ToastContainer
        position="top-center"
        autoClose={5000}
        limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
