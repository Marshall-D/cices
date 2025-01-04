// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import UserCard from "../components/UserCard";

// interface User {
//   id: number;
//   name: string;
// }

// const HomePage: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data: User[]) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-extrabold text-center mb-10">
//         User Management Dashboard
//       </h1>

//       {loading ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {Array.from({ length: 9 }).map((_, index) => (
//             <div
//               key={index}
//               className="w-full h-40 bg-gray-200 animate-pulse rounded-lg"
//             ></div>
//           ))}
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {users.map((user) => (
//             <UserCard key={user.id} id={user.id} name={user.name} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// interface User {
//   id: number;
//   name: string;
// }

// const HomePage: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data: User[]) => {
//         setUsers(data);
//         setFilteredUsers(data);
//         setLoading(false);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const query = event.target.value.toLowerCase();
//     setSearchQuery(query);
//     setFilteredUsers(
//       users.filter((user) => user.name.toLowerCase().includes(query))
//     );
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-6 max-w-4xl">
//       <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
//         User Directory
//       </h1>
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Search users..."
//           value={searchQuery}
//           onChange={handleSearch}
//           className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
//         />
//       </div>
//       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredUsers.map((user) => (
//           <li
//             key={user.id}
//             className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
//           >
//             <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
//             <Link
//               to={`/user/${user.id}`}
//               className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//             >
//               View Details
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HomePage;

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

      {/* Right Section */}
      {/* <div
        className="hidden md:flex w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://source.unsplash.com/800x600/?coding)",
        }}
      /> */}
    </div>
  );
};

export default HomePage;
