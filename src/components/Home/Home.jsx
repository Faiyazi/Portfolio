import { useState } from "react";

function Home() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Faiyaz",
    title: "Frontend Developer",
    bio: "I build modern web applications using React."
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
            />

            <input
              type="text"
              name="title"
              value={profile.title}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
            />

            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
            />

            <button
              onClick={() => setIsEditing(false)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
            <h2 className="text-lg text-gray-600 mb-2">{profile.title}</h2>
            <p className="mb-4">{profile.bio}</p>

            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-400 px-4 py-2 rounded"
            >
              Edit
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default Home;