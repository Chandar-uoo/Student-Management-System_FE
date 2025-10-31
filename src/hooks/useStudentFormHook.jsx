import { useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useRefresh } from "./useRefresh";

function useStudentFormHook({ isUpdate, initialData }) {
  const nav = useNavigate();
  const {  triggerRefresh } = useRefresh();
  {
    /*state*/
  }
  const [addLoading, setAddLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

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

    setUploadingPhoto(true);
    try {
      const res = await axiosInstance.post("/upload", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setFormData((prev) => ({ ...prev, photo: res.url }));
    } catch (err) {
      toast.error("Failed to upload image. Please try again.");
      console.error("Image upload failed:", err);
    } finally {
      setUploadingPhoto(false);
    }
  };

  // Submit student form
  const handleSubmit = async () => {
    try {
      if (isUpdate) {
        setUpdateLoading(true);
        await axiosInstance.put(`/student/update/${initialData._id}`, formData);
        toast.success("details updated");
        triggerRefresh();
        nav("/");
      } else {
        setAddLoading(true);
        await axiosInstance.post("/student/add", formData);
        triggerRefresh()
        toast.success("details added");
        nav("/");
      }
    } catch (err) {
      toast.error(err.message);
      console.error(" Submit failed:", err);
    } finally {
      setAddLoading(false);
      setUpdateLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    addLoading,
    updateLoading,
    uploadingPhoto,
  };
}

export default useStudentFormHook;
