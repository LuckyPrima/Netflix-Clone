import React from "react";

function NavBar() {
  return (
    <nav className="fixed w-full h-evenly p-[20px] bg-black">
      <div className="flex justify-between">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Logo"
          className="w-[150px] h-full pl-[20px]"
        />
        <img
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Avatar"
          className="w-[60px] h-full pr-[20px]"
        />
      </div>
    </nav>
  );
}

export default NavBar;
