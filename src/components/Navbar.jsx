import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">Couch & Culture Explorer</h1>
            <div className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/events" className="hover:underline">Events</Link>
                <Link to="/profile" className="hover:underline">Profile</Link>
            </div>
        </nav>

    );
};

export default Navbar;