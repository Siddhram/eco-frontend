import React, { useState } from 'react';
import axios from 'axios';

const Signinpageseller = () => {
  const [sellerId, setSellerId] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSellerLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await axios.post('http://localhost:5000/auth/seller/login', {
        sellerId,
        emailOrPhone,
        password,
      });
      setMessage(response.data.message);
      console.log('Login successful:', response.data);
      // Handle additional actions, e.g., saving sellerId, navigating, etc.
    } catch (error) {
      setMessage(
        error.response?.data?.message || 'An error occurred. Please try again.'
      );
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Seller Sign in
              </h2>
              <form onSubmit={handleSellerLogin} className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="sellerId"
                      className="text-base font-medium text-gray-900"
                    >
                      Seller ID
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="sellerId"
                        id="sellerId"
                        placeholder="Enter your Seller ID"
                        value={sellerId}
                        onChange={(e) => setSellerId(e.target.value)}
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="emailOrPhone"
                      className="text-base font-medium text-gray-900"
                    >
                      Email or Phone
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="emailOrPhone"
                        id="emailOrPhone"
                        placeholder="Enter your email or phone"
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </form>

              {message && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-700">{message}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
            <div>
              <img
                className="w-full mx-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/1/cards.png"
                alt=""
              />
              <div className="w-full max-w-md mx-auto xl:max-w-xl">
                <h3 className="text-2xl font-bold text-center text-black">
                  Welcome Back, Seller!
                </h3>
                <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                  Manage your store, check sales, and grow your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signinpageseller;
