import { useNavigate } from "react-router-dom";

const StudentForm = ({
  isUpdate,
  handleSubmit,
  formData,
  handleChange,
}) => {
  const nav = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <h1 className="text-2xl font-bold text-white">
              {isUpdate ? "Update Student" : "Add New Student"}
            </h1>
            <p className="text-blue-100 mt-1">
              {isUpdate
                ? "Modify student details"
                : "Enter student information to add to the database"}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="p-8 space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                pattern="^[a-zA-Z\\s]+$"
                minLength={2}
                maxLength={50}
                value={formData.fullName}
                onChange={handleChange("fullName")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* DOB */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                value={formData.DOB}
                onChange={handleChange("DOB")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                value={formData.gender}
                onChange={handleChange("gender")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={handleChange("email")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="text"
                required
                minLength={10}
                value={formData.phoneNumber}
                onChange={handleChange("phoneNumber")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <textarea
                value={formData.address}
                minLength={5}
                required
                maxLength={200}
                onChange={handleChange("address")}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Class & Roll Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class
                </label>
                <input
                  type="number"
                  min={1}
                  max={12}
                  required
                  value={formData.studentClass}
                  onChange={handleChange("studentClass")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Roll Number
                </label>
                <input
                  type="text"
                  pattern="^[a-zA-Z0-9]+$"
                  value={formData.rollNumber}
                  required
                  maxLength={20}
                  onChange={handleChange("rollNumber")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Guardian & Year */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guardian Name
                </label>
                <input
                  type="text"
                  pattern="^[a-zA-Z\\s]+$"
                  minLength={2}
                  maxLength={50}
                  value={formData.guardianName}
                  required
                  onChange={handleChange("guardianName")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Year
                </label>
                <input
                  type="number"
                  min={1000}
                  max={10000}
                  value={formData.year}
                  required
                  onChange={handleChange("year")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleChange("photo")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
              />

              {/* Photo Preview */}
              {formData.photo && typeof formData.photo === "string" && (
                <div className="mt-3">
                  <img
                    src={`http://localhost:3000${formData.photo}`}
                    alt="Student Photo"
                    className="w-32 h-32 object-cover rounded-lg border shadow-sm"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/128?text=No+Image";
                    }}
                  />
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => nav("/admin/students")}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-sm"
              >
                {isUpdate ? "Update Student" : "Add Student"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
