import React from "react";
import { ArrowLeft, Edit2, Trash2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import useDashBoardHooks from "../hooks/useDashBoardHooks";

export const StudentDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { student } = location.state || {};
  const { handleEdit, handleDelete } = useDashBoardHooks();

  if (!student)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg">No student data found.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-gray-100 relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all"
        >
          <ArrowLeft size={22} />
          <span className="hidden sm:inline text-sm font-medium">Back</span>
        </button>

        {/* Header */}
        <div className="text-center mb-10 mt-4">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            Student Profile
          </h1>
          <p className="text-gray-500 mt-1">
            Detailed information about{" "}
            <span className="font-medium text-gray-700">
              {student.fullName}
            </span>
          </p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 border-b pb-8 mb-8">
          <img
            src={`http://localhost:3000${student.photo}`}
            alt={student.fullName}
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-100 shadow-md"
            onError={(e) =>
              (e.target.src =
                "https://via.placeholder.com/150?text=No+Image")
            }
          />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">
              {student.fullName}
            </h2>
            <p className="text-gray-500 mt-1">{student.email}</p>
            <p className="text-gray-500">{student.phoneNumber}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center sm:justify-end mb-10">
          <button
            onClick={() => handleEdit(student)}
            className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2.5 rounded-lg shadow hover:bg-blue-600 transition-all duration-200"
          >
            <Edit2 size={18} />
            Edit
          </button>
          <button
            onClick={() => handleDelete(student._id)}
            className="flex items-center gap-2 bg-red-500 text-white px-6 py-2.5 rounded-lg shadow hover:bg-red-600 transition-all duration-200"
          >
            <Trash2 size={18} />
            Delete
          </button>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Gender</p>
            <p className="text-gray-800 font-medium">{student.gender}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">
              Date of Birth
            </p>
            <p className="text-gray-800 font-medium">
              {new Date(student.DOB).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Class</p>
            <p className="text-gray-800 font-medium">{student.studentClass}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">
              Roll Number
            </p>
            <p className="text-gray-800 font-medium">{student.rollNumber}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Guardian</p>
            <p className="text-gray-800 font-medium">{student.guardianName}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Year</p>
            <p className="text-gray-800 font-medium">{student.year}</p>
          </div>
          <div className="sm:col-span-2 md:col-span-3">
            <p className="text-sm font-medium text-gray-500 mb-1">Address</p>
            <p className="text-gray-800 font-medium">{student.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
