import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link to="/home" className="flex items-center justify-center">
      <div className="bg-yellow-400 p-2.5 sm:p-1.5 flex items-center justify-center text-gray-800 rounded-full ml-4">
        <i className="fa-solid fa-pen-nib"></i>
      </div>
    </Link>
  );
}
