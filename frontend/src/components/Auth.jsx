import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithGoogle} from "../firebaseConfig.js";
import Nav from './Nav';
import LoadingScreen from './LoadingScreen';

function Auth() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmail(formData.email, formData.password);
      console.log("Login successful");
      navigate("/");
    } catch (error) {
      setError(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("Google sign-in failed.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear error when user types
  };

  if (loading) {
    return (
      <div className="min-h-screen dark:bg-slate-900 dark:text-white">
        <Nav />
        <LoadingScreen message="Signing in..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-slate-900 dark:text-white">
      <Nav />
      <div className="pt-24 flex justify-center items-center">
        <div className="max-w-md w-full bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Sign in</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Access your account</p>
          </div>

          {error && <div className="mt-4 p-3 bg-red-100 text-red-600 rounded">{error}</div>}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-slate-800 text-gray-500 dark:text-gray-400">Or continue with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center p-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-700 hover:bg-gray-50 dark:hover:bg-slate-600"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google" className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>

          <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
