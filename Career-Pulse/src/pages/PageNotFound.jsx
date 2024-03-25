import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-black to-gray-700">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4">Oops!</h1>
        <p className="text-lg text-white">The page you are looking for could not be found.</p>
      </div>
      <Link to='/'>
        <button className="mt-8 px-6 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out">Go Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
