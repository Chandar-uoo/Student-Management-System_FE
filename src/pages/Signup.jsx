import { SignupForm } from "../components/SignupForm";
import useSignupHooks from "../hooks/useSignupHooks";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const nav = useNavigate();
  const { formData, error, handleChange, signupHandler, loading } =
    useSignupHooks();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md w-full max-w-md p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">
          Sign Up
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Create your account to get started.
        </p>
        {/*signup form */}
        <SignupForm
          formData={formData}
          handleChange={handleChange}
          signupHandler={signupHandler}
          loading={loading}
        />
        {/*error*/}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
            {error}
          </div>
        )}
        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <span
            onClick={() => nav("/login")}
            className="text-gray-800 font-medium hover:text-gray-900 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};
