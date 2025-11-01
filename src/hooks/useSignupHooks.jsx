import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api/axiosInstance";
import { tokenService } from "../utils/tokenService";
import { toast } from "react-toastify";

function useSignupHooks() {
  const nav = useNavigate();
{/*states */}
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
 

  {/* to  state update*/}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trimStart(),
    }));
  };
{/* to signup */}
  const signupHandler = async (e) => {
    e.preventDefault();
    

    try {
      const res = await axiosInstance.post("/auth/signup", formData);
      console.log(res.data);

      //  Save token if signup returns one
      if (res.accessToken) {
        tokenService.set(res.accessToken);
        nav("/");
      } else {
        nav("/login");
      }
    } catch (err) {
      toast.error(err.message || "Signup failed")
    } 
  };

  return {
    formData,
    setFormData,
    handleChange,
    signupHandler,
  };
}
export default useSignupHooks;
