import React from "react";

const Navbar = () => {
  const pages = [
    { name: "Home", redirect: "" },
    { name: "About", redirect: "" },
  ];

  return (
    <nav className="flex bg-white text-black w-full px-4 py-6">
      <div className="flex items-center bg-white w-full space-x-12">
        <h1 className="text-4xl ">Henry</h1>
        <ul className="flex items-center space-x-8">
          {pages.map((item) => {
            return (
              <li className="duration-250 transition-all hover:shadow-xl  rounded-2xl text-md font-serif border-2 px-4 py-2">
                <a href={item.redirect}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;