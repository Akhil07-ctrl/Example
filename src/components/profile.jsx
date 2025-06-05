import { useState, useEffect } from 'react'
import { FaCamera, FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Profile = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        bio: '',
        profileImage: 'https://randomuser.me/api/portraits/women/44.jpg'
    });
    const [editData, setEditData] = useState({ ...user });

    // Load user data from localStorage or context when component mounts
    useEffect(() => {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            const userData = JSON.parse(savedUser);
            setUser(userData);
            setEditData(userData);
        } else {
            // If no user data, redirect to login
            navigate('/login');
        }
    }, [navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        setUser({ ...editData });
        // Save to localStorage
        localStorage.setItem('currentUser', JSON.stringify(editData));
        setIsEditing(false);
        console.log('Profile updated:', editData);
    };

    const handleCancel = () => {
        setEditData({ ...user });
        setIsEditing(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center">
            <div className="w-full max-w-md rounded-md shadow-sm">
                {/* Header with Edit/Save buttons */}
                <div className="bg-white py-5 px-5 flex justify-between items-center">
                    <h2 className="text-2xl text-gray-800">Account Settings</h2>
                    <div className="flex space-x-2">
                        {!isEditing ? (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="p-2 text-violet-600 hover:text-violet-700"
                                title="Edit Profile"
                            >
                                <FaEdit size={16} />
                            </button>
                        ) : (
                            <div className="flex space-x-2">
                                <button
                                    onClick={handleSave}
                                    className="p-2 text-green-600 hover:text-green-700"
                                    title="Save Changes"
                                >
                                    <FaSave size={16} />
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="p-2 text-red-600 hover:text-red-700"
                                    title="Cancel"
                                >
                                    <FaTimes size={16} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Profile Section */}
                <div className="bg-white px-5 pb-4">
                    <div className="flex items-start gap-4">
                        <div className="relative">
                            <img
                                src={user.profileImage}
                                alt="User"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <div className="absolute bottom-0 right-0 bg-violet-600 rounded-full p-1 text-white text-xs cursor-pointer hover:bg-violet-700">
                                <FaCamera size={12} />
                            </div>
                        </div>

                        <div className="flex-1">
                            {!isEditing ? (
                                <div>
                                    <h3 className="text-md font-semibold text-gray-900">
                                        {user.name || 'User Name'}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {user.email || 'user@email.com'}
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        name="name"
                                        value={editData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                        className="w-full px-3 py-1 text-md font-semibold border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={editData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bio Section */}
                <div className="bg-white px-5 pb-4">
                    {!isEditing ? (
                        <div className="mt-4 text-md text-gray-700 leading-relaxed">
                            {user.bio || 'No bio available. Click edit to add your bio.'}
                        </div>
                    ) : (
                        <div className="mt-4">
                            <textarea
                                name="bio"
                                value={editData.bio}
                                onChange={handleInputChange}
                                placeholder="Tell us about yourself..."
                                rows={4}
                                className="w-full px-3 py-2 text-md text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="bg-white px-5 pb-6">
                    <div className="border-t border-dashed border-gray-300 my-6"></div>
                    <div className="space-y-3">
                        <button
                            onClick={() => navigate('/user-home')}
                            className="w-full py-2 px-4 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition duration-200"
                        >
                            Go to Home Page
                        </button>
                        <button
                            onClick={handleLogout}
                            className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;