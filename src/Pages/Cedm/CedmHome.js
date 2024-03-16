import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const WebHome = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="shadow-md w-full fixed top-0 left-0 bg-gray-900 z-50"
    >
      <div
        onClick={toggleMenu}
        className="absolute right-4 top-4 cursor-pointer md:hidden w-7 h-7 z-10"
      >
        {open ? (
          <XMarkIcon className="text-green" />
        ) : (
          <Bars3BottomRightIcon className="text-white" />
        )}
      </div>
      <div
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-12" : "-top-full"
        }`}
      >
        <ul className="md:flex md:items-center py-7">
          <li className="md:ml-8 md:my-0 my-7 font-semibold transition duration-300 ease-in-out transform hover:scale-105">
            <NavLink to="/elite1program">
              <Button
                className="text-lg px-5 py-1 rounded-md font-medium text-white transform hover:scale-105 bg-blue-500 hover:bg-blue-600 border-2 transition-all duration-300"
                activeClassName="bg-blue-600"
              >
                Elite 1.0 Program
              </Button>
            </NavLink>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold transition duration-300 ease-in-out transform hover:scale-105">
            <NavLink to="/elite2program">
              <Button
                className="text-lg px-5 py-1 rounded-md font-medium text-white transform hover:scale-105 bg-blue-500 hover:bg-blue-600 border-2 transition-all duration-300"
                activeClassName="bg-blue-600"
              >
                Elite 2.0 Program
              </Button>
            </NavLink>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold transition duration-300 ease-in-out transform hover:scale-105">
            <NavLink to="/elite3program">
              <Button
                className="text-lg px-5 py-1 rounded-md font-medium text-white transform hover:scale-105 bg-blue-500 hover:bg-blue-600 border-2 transition-all duration-300"
                activeClassName="bg-blue-600"
              >
                Elite 3.0 Program
              </Button>
            </NavLink>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold transition duration-300 ease-in-out transform hover:scale-105">
            <NavLink to="/corporate-workshop">
              <Button
                className="text-lg px-5 py-1 rounded-md font-medium text-white transform hover:scale-105 bg-blue-500 hover:bg-blue-600 border-2 transition-all duration-300"
                activeClassName="bg-blue-600"
              >
                Corporate Workshop
              </Button>
            </NavLink>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default WebHome;
