import { appleImg, searchImg, bagImg } from "../utils.js";
import { navLists } from "../constants";

function Navbar() {
  return (
    <header className="w-full py-5 sm:px-10 px-5  flex justify-between items-center">
      <nav className="flex w-full  screen-max-width  ">
        <img
          src={appleImg}
          alt="apple"
          width={16}
          height={22}
          className="cursor-pointer"
        />
        <div className="flex flex-1 justify-center max-sm:hidden ">
          {navLists.map((nav, i) => {
            return (
              <div
                className="px-5 text-[15px] cursor-pointer text-[#808080] hover:text-white hover:scale-105 transition-all duration-200 "
                key={nav}
              >
                {nav}
              </div>
            );
          })}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            src={searchImg}
            alt="search"
            width={16}
            height={18}
            className="cursor-pointer hover:scale-110 transition-all duration-200"
          />
          <img
            src={bagImg}
            alt="bag"
            width={16}
            height={18}
            className="cursor-pointer hover:scale-110  transition-all duration-200"
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
