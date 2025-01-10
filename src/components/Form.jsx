import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import URI from "../../config";

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${URI}/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message || "Failed to submit form");
      }


      // Clear form and display success notification
      setFormData({
        name: "",
        email: "",
        contact: "",
        description: "",
      });
      toast.success("Form submitted successfully!");
      setTimeout(() => {
        onClose()
      }, 1000);
    } catch (err) {
      toast.error(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full  relative sm:max-w-lg">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 font-roboto"
      >
        ✕
      </button>

      <h2 className="text-xl font-bold  mb-4">Request a Demo</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          {/* <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mt-4"
          >Please enter Your name</label> */}
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Name"
            required
          />
        </div>
        <div>
        {/* <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mt-4"
          >Please enter your email</label> */}
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full h-10 p-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Email"
            required
          />
        </div>
        <div>
        {/* <label
            htmlFor="contact"
            className="block text-sm font-medium text-gray-700 mt-4"
          >Please enter Your contact no.</label> */}
          <input
            type="tel"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 block w-full h-10 p-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Contact Number"
            required
          />
        </div>
        <div>
          {/* <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mt-4"
          >Please describe your request</label> */}
          
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full p-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Describe your request"
   
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#FD8955] h-10 text-white font-bold py-2 px-4 rounded hover:bg-[#e67e4d] transition duration-300"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Form;
