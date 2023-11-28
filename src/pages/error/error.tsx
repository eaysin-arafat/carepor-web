import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-[150px] font-bold text-red-500">404</h1>
        <p className="text-2xl text-gray-600  mb-5">Oops! Page not found.</p>
        <p className="text-gray-600">
          The page you are looking for might be under construction or does not
          exist.
        </p>
        <Link
          to="/test"
          className="mt-8 inline-block px-6 py-3 font-semibold text-white rounded-md "
          style={{ backgroundColor: "var(--primary)" }}
        >
          Go back
        </Link>
      </div>
    </div>
  );
}

export default Error;
