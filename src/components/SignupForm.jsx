import React from "react";

export const SignupForm = ({
  signupHandler,
  handleChange,
  formData,
  loading,
}) => {
  return (
    <>
      <form onSubmit={signupHandler} className="space-y-5">
        {/* full name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            minLength={2}
            maxLength={50}
            pattern="^[a-zA-Z\\s]+$"
            onChange={handleChange}
            value={formData.fullName}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200"
            placeholder="Enter your full name"
            required
          />
        </div>
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200"
            placeholder="Enter your email"
            required
          />
        </div>
        {/*password*/}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            minLength={6}
            maxLength={128}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200"
            placeholder="Enter your password"
            required
          />
        </div>
        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber}
            pattern="[0-9]{10}"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200"
            placeholder="Enter your phone number"
            required
          />
        </div>
        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <textarea
            name="address"
            onChange={handleChange}
            value={formData.address}
            rows="2"
            minLength={5}
            maxLength={200}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200 resize-none"
            placeholder="Enter your address"
            required
          ></textarea>
        </div>
        {/* Action Buttons */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>
    </>
  );
};
