import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login data:', formData);

        // Check if user already exists in localStorage (from previous signup)
        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const existingUser = existingUsers.find(user =>
            user.email === formData.email && user.password === formData.password);

        // If user doesn't exist, generate a new one
        if (!existingUser) {
            alert('Invalid credentials. Please try again!');
            return;
        }

        localStorage.setItem('currentUser', JSON.stringify(existingUser));
        navigate('/profile');
    };

    const handleBackToWelcome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 px-6 py-10">
            <div className="w-full max-w-sm">

                <>
                    <div className="mb-8">
                        <button
                            onClick={handleBackToWelcome}
                            className="text-left text-violet-600 hover:text-violet-700 mb-4"
                        >
                            ← Back
                        </button>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                        <p className="text-md text-gray-500 mb-6">
                            Sign in to your PopX account
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username (optional)"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-violet-600 text-white font-semibold py-3 rounded-md hover:bg-violet-700 transition duration-300 ease-in-out"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <button
                                onClick={() => navigate('/sign-up')}
                                className="text-violet-600 hover:text-violet-700 font-semibold"
                            >
                                Create Account
                            </button>
                        </p>
                    </div>
                </>
            </div>
        </div>
    );
};

export default Login;