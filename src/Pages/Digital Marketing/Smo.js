import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Smo = () => {
  return (
    <div className="bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 flex justify-center items-center h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to the SMO Page
        </h1>
        <p className="text-lg md:text-xl mb-8">
          How can we assist you with Social Media Optimization?
        </p>
        <NavLink to="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-gray-800 px-8 py-4 rounded-lg shadow-md transition duration-300"
          >
            Contact Us
          </motion.button>
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Smo;
