import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const {  API } = useAuth();
const token = localStorage.getItem("token");

 const getAllUserData = async () => {
  try {
    const response = await fetch(`${API}/api/admin/users/${params.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userData = await response.json();
   setData({
  username: userData.user?.username || "",
  email: userData.user?.email || "",
  phone: userData.user?.phone || "",
});

  } catch (error) {
    console.log(error);
  }
};


  useEffect(() => {
    getAllUserData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/admin/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization:`Bearer ${token}` ,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Updated successfully");
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Update User Data</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={data.username}
              onChange={handleInput}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleInput}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Mobile
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={data.phone}
              onChange={handleInput}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 shadow-sm transition duration-200"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
