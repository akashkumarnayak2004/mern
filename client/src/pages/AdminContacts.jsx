import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);

  const getAllUsersContact = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log("Data received:", data);

      if (response.ok && Array.isArray(data.contacts)) {
        setContactData(data.contacts);
      } else {
        throw new Error("Invalid contact data format or unauthorized access");
      }

    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    getAllUsersContact();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">All Contact Messages</h1>

      {contactData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
            <thead className="bg-blue-100">
              <tr>
                <th className="text-left py-2 px-4 border-b">SI No</th>
                <th className="text-left py-2 px-4 border-b">Name</th>
                <th className="text-left py-2 px-4 border-b">Email</th>
                <th className="text-left py-2 px-4 border-b">Message</th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((contact, index) => (
                <tr key={contact._id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{contact.name}</td>
                  <td className="py-2 px-4 border-b">{contact.email}</td>
                  <td className="py-2 px-4 border-b">{contact.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600">No contact messages found.</p>
      )}
    </div>
  );
};

export default AdminContacts;
