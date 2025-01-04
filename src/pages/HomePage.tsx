import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
}

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex">
      <div className="w-full bg-gray-900 text-white flex flex-col justify-center items-center px-6">
        <h1 className="text-5xl font-bold my-4">User Management</h1>
        <p className="text-lg mb-8 text-gray-400">
          Manage your users efficiently with a clean and intuitive interface.
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-3 mb-6 text-gray-900 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* User List */}
        <ul className="w-full max-w-md space-y-8">
          {loading ? (
            <p>Loading...</p>
          ) : filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <li
                key={user.id}
                className="p-8 bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-200"
              >
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <Link
                  to={`/user/${user.id}`}
                  className="text-purple-500 hover:text-purple-300 text-sm mt-2 block"
                >
                  View Details →
                </Link>
              </li>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
