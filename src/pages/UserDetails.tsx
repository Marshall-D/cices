import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Address {
  street: string;
  city: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
}

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-full bg-gray-900 text-white flex flex-col justify-center items-center px-6">
        {/* Header */}
        <header className="absolute top-0 left-0 w-full bg-purple-700 text-center py-4">
          <h1 className="text-2xl font-bold text-white uppercase">
            User Details
          </h1>
        </header>

        {loading ? (
          <p>Loading user details...</p>
        ) : user ? (
          <div className="mt-16 flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-4">{user.name}</h2>
            <ul className="text-lg text-gray-400 space-y-3">
              <li>
                <span className="font-medium text-white">Email:</span>{" "}
                {user.email}
              </li>
              <li>
                <span className="font-medium text-white">Phone:</span>{" "}
                {user.phone}
              </li>
              <li>
                <span className="font-medium text-white">Website:</span>{" "}
                <a
                  href={`http://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:underline"
                >
                  {user.website}
                </a>
              </li>
              <li>
                <span className="font-medium text-white">Address:</span>{" "}
                {user.address.street}, {user.address.city}
              </li>
            </ul>

            <Link
              to="/"
              className="mt-6 px-6 py-3 bg-purple-500 rounded-lg text-white font-semibold hover:bg-purple-400 transition w-[200px] md:w-[300px] lg:w-[400px] text-center"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <p>User not found.</p>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
