import React from "react";
import { User, Edit2, Trash2, View } from "lucide-react"; // icons

export const StudentCard = ({ students = [], onVeiw }) => {
  if (!students.length)
    return (
      <p className="text-center text-gray-500 italic mt-6">
        No students found.
      </p>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {students.map((student) => (
        <div
          key={student._id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
        >
          {/* Top Gradient Banner */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-24"></div>

          {/* Card Content */}
          <div className="relative px-6 pb-6">
            {/* Profile Image */}
            <div className="flex justify-center -mt-12 mb-4">
              <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white">
                {student.photo ? (
                  <img
                    src={`http://localhost:3000${student.photo}`}
                    alt={student.fullName}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User size={40} className="text-gray-400" />
                )}
              </div>
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
              {student?.fullName}
            </h3>

            {/* Info Section */}
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex justify-between">
                <span className="font-medium">Class:</span>
                <span>{student.studentClass} Standard</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Roll No:</span>
                <span>{student.rollNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Phone:</span>
                <span>{student.phoneNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Year:</span>
                <span>{student.year}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => onVeiw(student)}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <View size={16} />
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
