// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// interface Address {
//   street: string;
//   city: string;
// }

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   website: string;
//   address: Address;
// }

// const UserDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((response) => response.json())
//       .then((data: User) => {
//         setUser(data);
//         setLoading(false);
//       })
//       .catch((error) => console.error(error));
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="text-xl font-semibold">Loading user details...</div>
//       </div>
//     );
//   }

//   if (!user) {
//     return <div>User not found</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-xl">
//       <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
//         <h1 className="text-2xl font-bold">{user.name}</h1>
//         <p>
//           <strong>Email:</strong> {user.email}
//         </p>
//         <p>
//           <strong>Phone:</strong> {user.phone}
//         </p>
//         <p>
//           <strong>Website:</strong>{" "}
//           <a
//             href={`https://${user.website}`}
//             className="text-blue-500 hover:underline"
//           >
//             {user.website}
//           </a>
//         </p>
//         <p>
//           <strong>Address:</strong> {user.address.street}, {user.address.city}
//         </p>
//       </div>
//       <Link
//         to="/"
//         className="block mt-6 text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//       >
//         Back to Home
//       </Link>
//     </div>
//   );
// };

// export default UserDetails;

// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// interface Address {
//   street: string;
//   city: string;
// }

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   website: string;
//   address: Address;
// }

// const UserDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((response) => response.json())
//       .then((data: User) => {
//         setUser(data);
//         setLoading(false);
//       })
//       .catch((error) => console.error(error));
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-xl font-semibold text-gray-800">
//           User not found
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-6 max-w-2xl">
//       <div className="bg-white p-8 rounded-lg shadow-md">
//         <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
//           {user.name}
//         </h1>
//         <div className="space-y-3">
//           <p className="flex items-center">
//             <span className="font-medium text-gray-700">Email:</span>{" "}
//             <span className="ml-2 text-gray-600">{user.email}</span>
//           </p>
//           <p className="flex items-center">
//             <span className="font-medium text-gray-700">Phone:</span>{" "}
//             <span className="ml-2 text-gray-600">{user.phone}</span>
//           </p>
//           <p className="flex items-center">
//             <span className="font-medium text-gray-700">Website:</span>{" "}
//             <a
//               href={`http://${user.website}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="ml-2 text-blue-500 hover:underline"
//             >
//               {user.website}
//             </a>
//           </p>
//           <p className="flex items-center">
//             <span className="font-medium text-gray-700">Address:</span>{" "}
//             <span className="ml-2 text-gray-600">
//               {user.address.street}, {user.address.city}
//             </span>
//           </p>
//         </div>
//       </div>
//       <Link
//         to="/"
//         className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//       >
//         Back to Home
//       </Link>
//     </div>
//   );
// };

// export default UserDetails;

// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// interface Address {
//   street: string;
//   city: string;
// }

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   website: string;
//   address: Address;
// }

// const UserDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setUser(data);
//         setLoading(false);
//       })
//       .catch((err) => console.error(err));
//   }, [id]);

//   return (
//     <div className="flex h-screen">
//       {/* Left Section */}
//       <div className="w-full bg-gray-900 text-white flex flex-col justify-center items-center px-6">
//         {loading ? (
//           <p>Loading user details...</p>
//         ) : user ? (
//           <>
//             <h1 className="text-4xl font-bold mb-4">{user.name}</h1>
//             <ul className="text-lg text-gray-400 space-y-3">
//               <li>
//                 <span className="font-medium text-white">Email:</span>{" "}
//                 {user.email}
//               </li>
//               <li>
//                 <span className="font-medium text-white">Phone:</span>{" "}
//                 {user.phone}
//               </li>
//               <li>
//                 <span className="font-medium text-white">Website:</span>{" "}
//                 <a
//                   href={`http://${user.website}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-purple-500 hover:underline"
//                 >
//                   {user.website}
//                 </a>
//               </li>
//               <li>
//                 <span className="font-medium text-white">Address:</span>{" "}
//                 {user.address.street}, {user.address.city}
//               </li>
//             </ul>

//             <Link
//               to="/"
//               className="mt-6 px-6  py-3 bg-purple-500 rounded-lg text-white font-semibold hover:bg-purple-400 transition  w-[200px] md:w-[300px] lg:w-[400px] text-center"
//             >
//               Back to Home
//             </Link>
//           </>
//         ) : (
//           <p>User not found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserDetails;

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
