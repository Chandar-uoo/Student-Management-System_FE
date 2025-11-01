import { useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRefresh } from "./useRefresh";
import { tokenService } from "../utils/tokenService";

function useDashBoardHooks() {
  const {  triggerRefresh } = useRefresh();
  const nav = useNavigate();
  const [students, setStudents] = useState([]);
  const [yearData, setyearData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchStudentData = async () => {
    try {
      const res = await axiosInstance.get("/student/read");
      setStudents(res.data);
    } catch (err) {
       toast.error(err.message)
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/student/delete/${id}`);
      toast.success("student deleted");
      triggerRefresh();
      nav("/")
    } catch (err) {
       toast.error(err.message)
    }
  };

  const handleEdit = (student) => {
    nav("/student-form", { state: { student } });
  };
  const onSearch = async () => {
    try {
      const res = await axiosInstance.get(`/student/search`, {
        params: { q: searchTerm },
      });
      setStudents(res.data);
    } catch (err) {
      toast.error(err.message)
    }
  };

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/auth/logout");
      setSearchTerm("");
      setStudents(null);
      setyearData(null);
      tokenService.clear()
      toast.success("logout sucessfull")
      nav("/login");
    } catch (error) {
      toast.error(error.message)
    }
  };
  const handleView = async (student) => {
    nav("/student", { state: { student } });
  };
  const yearDataHandler = async () => {
    try {
      const res = await axiosInstance.get("/student/analytics");
      setyearData(res.data);
    } catch (error) {
         toast.error(error.message)
    }
  };
  return {
    students,
    setStudents,
    yearData,
    setyearData,
    setSearchTerm,
    searchTerm,
    yearDataHandler,
    handleDelete,
    handleEdit,
    handleView,
    fetchStudentData,
    handleLogout,
    onSearch,
  };
}
export default useDashBoardHooks;
