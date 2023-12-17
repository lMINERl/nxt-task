import React from "react";

interface NavbarProps {
  open: boolean;
  collabseClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = (props: NavbarProps) => {
  return (
    <nav className="flex justify-between items-center px-md0 py-xs0 bg-gray-700">
      <div className="py-xs2 pr-md0 flex justify-start items-center">
        <div className="text-3xl text-white">Evently</div>
        <div className="ml-[7.7rem] w-[24] h-[24]">
          <button
            className="text-gray-50"
            onClick={() => {
              props.collabseClick((old) => !old);
            }}
          >
            {props.open ? "Close" : "Open"}
          </button>
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
