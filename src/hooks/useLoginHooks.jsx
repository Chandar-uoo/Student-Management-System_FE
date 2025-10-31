import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/axiosInstance";
import { tokenService } from "../utils/tokenService";
import toast from "react-hot-toast";

function useLoginHooks() {
  const nav = useNavigate();
  {
    /* states*/
  }
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  {
    /* state updates */
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trimStart(),
    }));
  };

  {
    /*login */
  }
  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/auth/login", formData);
      tokenService.set(res.accessToken);
      nav("/");
    } catch (err) {
      toast.error(err.message || "Login failed");
    }
  };
  return { formData, setFormData, loginHandler, handleChange };
}
export default useLoginHooks;
