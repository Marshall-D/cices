import { Link } from "react-router-dom";

interface UserCardProps {
  id: number;
  name: string;
}

const UserCard: React.FC<UserCardProps> = ({ id, name }) => {
  // Generate a random avatar using DiceBear
  //   const avatarUrl = `https://avatars.dicebear.com/api/micah/${id}.svg`;

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4">
        {/* <img
          src={avatarUrl}
          alt={name}
          className="w-12 h-12 rounded-full border"
        /> */}
        <div className="flex-1">
          <h2 className="text-lg font-bold">{name}</h2>
        </div>
      </div>
      <Link
        to={`/user/${id}`}
        className="mt-4 block text-center text-white bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
