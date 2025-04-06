import React, { useState } from 'react';

export default function ProfilePage() {
  const [ setProfilePic] = useState('/default-profile.jpg');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <div className="flex items-center gap-4">
        <img
  src="https://ih1.redbubble.net/image.4681710848.9862/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.webp"
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

        {['First Name', 'Last Name', 'Email', 'User ID'].map((label, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
            <label className="text-gray-700 font-semibold">{label}:</label>
            <p className="text-gray-900 mt-1">Sample {label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


