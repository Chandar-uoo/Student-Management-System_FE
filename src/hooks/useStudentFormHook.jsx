import { useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

import { useRefresh } from "./useRefresh";
import { toast } from "react-toastify";

function useStudentFormHook({ isUpdate, initialData }) {
  const nav = useNavigate();
  const {  triggerRefresh } = useRefresh();
  {
    /*state*/
  }
 

  const [formData, setFormData] = useState({
    fullName: initialData?.fullName || "",
    DOB: initialData?.DOB ? initialData.DOB.split("T")[0] : "",
    gender: initialData?.gender || "",
    email: initialData?.email || "",
    phoneNumber: initialData?.phoneNumber || "",
    address: initialData?.address || "",
    studentClass: initialData?.studentClass || "",
    rollNumber: initialData?.rollNumber || "",
    guardianName: initialData?.guardianName || "",
    year: initialData?.year || "",
    photo: initialData?.photo || "",
  });

  // Handle input changes
  const handleChange = (field) => (e) => {
    if (field === "photo") {
      const file = e.target.files[0];
      if (file) {
        if (!file.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        if (file.size > 5 * 1024 * 1024) {
          alert("Image size should be less than 5MB");
          return;
        }
        uploadPhoto(file);
      }
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  // Upload photo to server
  const uploadPhoto = async (file) => {
    const fd = new FormData();
    fd.append("photo", file);

    
    try {
      const res = await axiosInstance.post("/upload", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setFormData((prev) => ({ ...prev, photo: res.url }));
    } catch (err) {
      toast.error("Failed to upload image. Please try again.");
      console.error("Image upload failed:", err);
    } 
  };

  // Submit student form
  const handleSubmit = async () => {
    try {
      if (isUpdate) {
       
        await axiosInstance.put(`/student/update/${initialData._id}`, formData);
        toast.success("details updated");
        triggerRefresh();
        nav("/");
      } else {
      ;
        await axiosInstance.post("/student/add", formData);
        triggerRefresh()
        toast.success("details added");
        nav("/");
      }
    } catch (err) {
      toast.error(err.message);
      console.error(" Submit failed:", err);
    } 
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmit,

  };
}

export default useStudentFormHook;
