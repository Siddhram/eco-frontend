import React, { useState } from "react";
import axios from "axios";

const Signupseller = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    password: "",
    phoneNumber: "",
    businessName: "",
    businessAddress: "",
    businessType: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/seller/signup",
        formData
      );
      setResponseMessage(response.data.message);
      console.log(`Seller registered successfully: ${response.data.sellerId}`);
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message ||
          "An error occurred. Please try again."
      );
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Seller Signup
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline"
                >
                  Login
                </a>
              </p>

              <form onSubmit={handleSubmit} className="mt-8">
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="text-base font-medium text-gray-900">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="emailId" className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="emailId"
                      id="emailId"
                      value={formData.emailId}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="text-base font-medium text-gray-900">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="businessName" className="text-base font-medium text-gray-900">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      id="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Enter your business name"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  {/* Business Address */}
                  <div>
                    <label htmlFor="businessAddress" className="text-base font-medium text-gray-900">
                      Business Address
                    </label>
                    <input
                      type="text"
                      name="businessAddress"
                      id="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleInputChange}
                      placeholder="Enter your business address"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  {/* Business Type */}
                  <div>
                    <label htmlFor="businessType" className="text-base font-medium text-gray-900">
                      Business Type
                    </label>
                    <input
                      type="text"
                      name="businessType"
                      id="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      placeholder="Enter your business type"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  {/* Submit */}
                  <div>
                    <button
                      type="submit"
                      className="w-full px-4 py-4 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Create Seller Account
                    </button>
                  </div>
                </div>
              </form>

              {responseMessage && (
                <div className="mt-4 text-center text-blue-600">{responseMessage}</div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50">
            <div>
              <img
                className="w-full mx-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/1/cards.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signupseller;
