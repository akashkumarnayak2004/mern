import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import{ toast } from 'react-toastify'; // ✅ Import toast for notifications
import 'react-toastify/dist/ReactToastify.css'; 


const defaultContact = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContact);
  const { user,API } = useAuth(); // Get user from AuthContext


  useEffect(() => {
  if (user?.username && user?.email) {
    setContact((prev) => ({
      ...prev,
      username: user.username,
      email: user.email,
    }));
  }
}, [user]);



  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleform = async (e) => {
    e.preventDefault();
    const { username, email, message } = contact;

    if (!username || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Contact form submitted successfully:", data);
        toast.error("Message sent successfully!");
        setContact(defaultContact); // Reset form
      } else {
        toast.error("Message not delivered. Server error.");
      }
    } catch (error) {
      console.error("Error in submitting contact form:", error);
      toast.error("Message not delivered. Error occurred.");
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6 space-y-8">
      
      {/* Contact Form + Image */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row w-full max-w-6xl">
        
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
          <form onSubmit={handleform} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Your Name"
                value={contact.username}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={contact.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                value={contact.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="images/support.png"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Embedded Map */}
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29926.10706153831!2d85.8036421934871!3d20.35139139253958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190912b69339ab%3A0xa11e7186a04f1474!2sPatia%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1746340137858!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Patia Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
