import "reactjs-popup/dist/index.css";
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      <div className="flex justify-evenly bg-black text-white p-2 ">
        {/* Amazon Logo*/}

        <img
          src="https://bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
          className="App-log"
          alt="logo"
          width="120rem"
        />

        {/* Search bar*/}

        <div className="w-3/5 hidden md:flex">
          <input
            type="text"
            name="name"
            className="px-3 w-full h-10 mt-2 rounded-l text-black outline-8 outline-[#F3A847]"
          />
          <button className="bg-[#F3A847] hover:bg-[#FF9900] w-12 h-10 mt-[7.5px] mr-3 rounded-r flex items-center justify-center text-black">
            <SearchIcon className="w-6" />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6 mx-2">
          <div className="flex flex-col cursor-pointer hover:underline ">
            <p className="text-xs md:text-sm">Hello, Sign in</p>
            <p className="text-[13px] md:text-base font-bold">Accounts and Lists</p>
          </div>

          <div className="flex flex-col cursor-pointer  hover:underline">
            <p className="text-xs md:text-sm">Returns,</p>
            <p className="text-[13px] md:text-base font-bold">& Orders</p>
          </div>

         {/* Cart */}

          <div className="flex items-cernter cursor-pointer">
            <ShoppingCartIcon className="w-10 h-8" />
            <div className="flex items-center relative">
              <span className="w-4 h-4 text-xs text-center bg-yellow-400 text-black font-bold rounded-full absolute bottom-5 right-0">
                0
              </span>
            </div>
            <p className="h-5 mt-2 font-bold hidden md:flex">Cart</p>
          </div>
        </div>
      </div>

      {/* Lower tab */}

      <div className=" h-10 text-[12px] pr-3 pl-2 md:text-sm flex bg-gray-800 text-white text-[13.1px] md:text-[14px] items-center space-x-5">
        <div className="flex items-center space-x-1">
          <MenuIcon className="w-6" />
          <p className="font-bold">All</p>
        </div>
        <p className="hover:underline">Today's Deal</p>
        <p className="hover:underline">Customer Service</p>
        <p className="hover:underline">Registry</p>
        <p className="hover:underline">Gift Cards</p>
        <p className="hover:underline">Sell</p>
      </div>
    </div>
  );
}

export default Header;
