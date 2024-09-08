import React from "react";

const Navbar = () => {
  return (
    <nav className=" flex justify-center p-4 text-xl font-semibold border-b-2 border-blue-950 sticky top-0">
      <ul className="flex  space-x-12 list-none">
        <li>
          <a href="#home" className="text-yellow-500 hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#offerings" className="text-yellow-500 hover:underline">
            Offerings
          </a>
        </li>
        <li>
          <a href="#education" className="text-yellow-500 hover:underline">
            Education
          </a>
        </li>
        <li>
          <a href="#internship" className="text-yellow-500 hover:underline">
            Internship
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sanjana-singh-6b802620a"
            target="_blank"
            className="text-yellow-500 hover:underline"
          >
            Linkedin
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
