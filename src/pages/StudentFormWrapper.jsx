import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useStudentFormHook from "../hooks/useStudentFormHook";
import StudentForm from "../components/StudentForm";

export const StudentFormWrapper = () => {
  const location = useLocation();
  const nav = useNavigate();
  const { student: initialData } = location.state || {};
  const isUpdate = initialData ? true : false;
  const { formData, handleSubmit,handleChange } = useStudentFormHook({
    initialData,
    isUpdate,
  });
  return (
    <>
      <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
        {initialData ? (
          <StudentForm
            isUpdate={isUpdate}
            handleChange={handleChange}
             handleSubmit={handleSubmit}
            formData={formData}
          />
        ) : (
          <StudentForm
            isUpdate={isUpdate}
             handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
          />
        )}

        <button
          onClick={() => nav("/")}
          className="w-full mt-1 bg-red-600 text-white py-2 rounded hover:bg-red-900 transition"
        >
          cancel
        </button>
      </div>
    </>
  );
};
