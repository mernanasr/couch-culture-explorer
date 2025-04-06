import React, { useState } from 'react';

export default function ProfilePage() {
  const [profilePic, setProfilePic] = useState('https://ih1.redbubble.net/image.4681710848.9862/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.webp');
  const [profile, setProfile] = useState({
    firstName: 'Ahmed',
    lastName: 'Ali',
    email: 'ahmed.ali@example.com',
    userId: 'user1234',
  });

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log('Saved Profile:', profile);
    alert('Profile saved successfully!');
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <div className="flex items-center gap-4">
          <img
            src={profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 shadow"
          />
          <div>
            <label htmlFor="photoUpload">
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg transition">
                Change Photo
              </button>
            </label>
            <input id="photoUpload" type="file" className="hidden" onChange={handlePhotoChange} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
            <label className="text-gray-700 font-semibold">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
            <label className="text-gray-700 font-semibold">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
            <label className="text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
            <label className="text-gray-700 font-semibold">User ID:</label>
            <input
              type="text"
              name="userId"
              value={profile.userId}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-800 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}


