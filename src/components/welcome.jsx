import { useNavigate } from "react-router-dom";

const Welcome = () => {

    const navigate = useNavigate();

    const handleCreateAccount = () => {
        navigate('/sign-up');
    }

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <div className="flex flex-col justify-end items-center min-h-screen bg-gray-50 px-6 py-10">
            <div className="w-full max-w-sm text-left">
                <>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
                    <p className="text-md text-gray-500 mb-6 w-2/3">
                        A place where you can share your thoughts and ideas with the world!
                    </p>
                    <button onClick={handleCreateAccount} className="w-full bg-violet-600 text-white font-semibold py-3 rounded-md mb-3 hover:bg-violet-700 transition duration-300 ease-in-out">
                        Create Account
                    </button>
                    <button onClick={handleLogin} className="w-full bg-violet-200 text-violet-800 font-semibold py-3 rounded-md hover:bg-violet-300 transition duration-300 ease-in-out">
                        Login
                    </button>
                </>

            </div>
        </div>
    )
}

export default Welcome;
