import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
     
      <Link to="/" className="text-xl font-bold text-indigo-700 hover:text-indigo-900">
        Couch & Culture Explorer
      </Link>

     
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link>
        <Link to="/events" className="text-gray-700 hover:text-purple-600">Events</Link>
        <Link to="/tours" className="text-gray-700 hover:text-purple-600">
  Town Tours
</Link>
        <Link to="/hosts" className="text-gray-700 hover:text-purple-600">Hosts</Link>
        <Link to="/profile" className="text-gray-700 hover:text-purple-600">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;

