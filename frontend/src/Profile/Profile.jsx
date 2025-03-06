import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import LoadingScreen from '../components/LoadingScreen';

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8000/users/current-user', {
          withCredentials: true
        });
        setUser(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load profile data');
        setLoading(false);
        console.error('Error fetching user profile:', err);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen dark:bg-slate-900 dark:text-white">
        <Nav />
        <LoadingScreen message="Loading your profile..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen dark:bg-slate-900 dark:text-white">
        <Nav />
        <div className="pt-24">
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
              <div className="text-red-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Error</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition-colors duration-300"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-slate-900 dark:text-white">
      <Nav />
      <div className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                <div className="relative">
                  <img
                    src={user?.avatar || "default-avatar.png"}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
                  />
                  <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{user?.username}</h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{user?.email}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      AI Enthusiast
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                      Machine Learning
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                      Data Science
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* About Section */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {user?.bio || "No bio available. Click edit to add your bio."}
                </p>
                <button className="mt-4 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Edit Bio
                </button>
              </div>

              {/* Stats Section */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Activity Stats</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-slate-700 rounded-xl">
                    <div className="text-3xl font-bold text-blue-500 dark:text-blue-400">12</div>
                    <div className="text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-slate-700 rounded-xl">
                    <div className="text-3xl font-bold text-green-500 dark:text-green-400">48</div>
                    <div className="text-gray-600 dark:text-gray-400">Posts</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-slate-700 rounded-xl">
                    <div className="text-3xl font-bold text-purple-500 dark:text-purple-400">256</div>
                    <div className="text-gray-600 dark:text-gray-400">Followers</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-slate-700 rounded-xl">
                    <div className="text-3xl font-bold text-orange-500 dark:text-orange-400">128</div>
                    <div className="text-gray-600 dark:text-gray-400">Following</div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-xl">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 dark:text-white">Created a new project</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile; 