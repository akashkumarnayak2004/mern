import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useAuth } from '../store/auth';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");
  const {  API } = useAuth();
  const getAllUserData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log("Data received:", data);

      if (response.ok && Array.isArray(data.users)) {
        setUsers(data.users);
      } else {
        throw new Error("Invalid user data format or unauthorized access");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Failed to load users.");
    } finally {
      setIsLoading(false);
    }
  };

  // delete the user on delete button
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
      `${API}/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log("Data received after delete:", data);

      if (response.ok) {
        getAllUserData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>

      {isLoading ? (
        <p className="text-gray-600">Loading users...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead className="bg-blue-100">
            <tr>
              <th className="text-left py-2 px-4 border-b">SI No</th>
              <th className="text-left py-2 px-4 border-b">Name</th>
              <th className="text-left py-2 px-4 border-b">Email</th>
              <th className="text-left py-2 px-4 border-b">Phone</th>
              <th className="text-left py-2 px-4 border-b">Role</th>
              <th className="text-left py-2 px-4 border-b">Update</th>
              <th className="text-left py-2 px-4 border-b">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{user.username}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.phone || "N/A"}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      user.isAdmin
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {user.isAdmin ? "Admin" : "User"}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm shadow transition duration-200">
                  <Link to={`/admin/users/${user._id}/edit`}>
                    Update
                  </Link>
                  </button>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm shadow transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminUsers;
