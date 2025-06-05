import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const UserHome = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            const userData = JSON.parse(currentUser);
            setUserName(userData.name);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setUserName('');
        navigate('/');
    }
    return (
        // Show welcome back message for logged in users
        <div className="flex flex-col justify-end items-center min-h-screen bg-gray-50 px-6 py-10">
            <div className="w-full max-w-sm text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {userName}!</h1>
                <p className="text-md text-gray-500 mb-6 w-2/3">
                    Ready to share more thoughts and ideas with the world?
                    <br />
                    Let's get started!
                </p>
                <button
                    onClick={() => navigate('/profile')}
                    className="w-full bg-violet-600 text-white font-semibold py-3 rounded-md mb-3 hover:bg-violet-700 transition duration-300 ease-in-out"
                >
                    Go to Profile
                </button>
                <button
                    onClick={handleLogout}
                    className="w-full bg-violet-200 text-violet-800 font-semibold py-3 rounded-md hover:bg-violet-300 transition duration-300 ease-in-out"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default UserHome;