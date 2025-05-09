import { GiBank, GiHospital } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BsBank } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { LiaHotelSolid } from "react-icons/lia";
import { GiShop } from "react-icons/gi";
import { IoRestaurantSharp } from "react-icons/io5";
import { BsBusFront } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const Category = () => {
  return (
    <section className="min-h-screen ">
      <div className="mt-8 w-11/12 mx-auto">
        <h1 className="font-plus text-center font-bold md:pb-8 text-3xl md:text-4xl text-mainbg py-3">
          Discover Everything About Our Town
        </h1>

        <div className="mb-8">
            <div className="flex justify-center w-8/12 mx-auto relative  ">
        <span className="right-3 top-1/2 hover:bg-[#003b7a] -translate-y-1/2 absolute rounded-lg text-xl bg-mainbg px-2 py-1 text-white">
            <IoIosSearch />
        </span>
            <input  className="bg-searchbar w-full px-3 py-1 border-2 text-mainbg rounded-lg border-gray-200" placeholder=" search for services..." type="search" name="" id="" />
        </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 w-10/12 mx-auto">
          <Link className="bg-mainbg hover:bg-[#003b7a] transition-colors duration-300 text-white rounded-2xl shadow-lg border-t-4 border-btncl p-4 md:p-6 flex flex-col items-center justify-center space-y-4 cursor-pointer hover:scale-105">
            <p>
              
              <BsBank className="md:text-4xl text-2xl text-btncl"/>
            </p>
            <h3 className="md:text-xl text-xs font-semibold">Banks & ATMs</h3>
          </Link>

          <Link className="bg-mainbg hover:bg-[#003b7a] transition-colors duration-300 text-white rounded-2xl shadow-lg border-t-4 border-btncl p-4 md:p-6 flex flex-col items-center justify-center space-y-4 cursor-pointer hover:scale-105">
            <p>
              <GiHospital className="md:text-4xl text-2xl text-btncl" />
              
            </p>
            <h3 className="md:text-xl text-xs font-semibold">Hospitals & Clinics</h3>
          </Link>

          <Link className="bg-mainbg hover:bg-[#003b7a] transition-colors duration-300 text-white rounded-2xl shadow-lg border-t-4 border-btncl p-4 md:p-6 flex flex-col items-center justify-center space-y-4 cursor-pointer hover:scale-105">
            <p>
              <LiaHotelSolid className="md:text-4xl text-2xl text-btncl" />
              
            </p>
            <h3 className="md:text-xl text-xs font-semibold">Hotels</h3>
          </Link>

          <Link className="bg-mainbg hover:bg-[#003b7a] transition-colors duration-300 text-white rounded-2xl shadow-lg border-t-4 border-btncl p-4 md:p-6 flex flex-col items-center justify-center space-y-4 cursor-pointer hover:scale-105">
            <p>
              <GiShop className="md:text-4xl text-2xl text-btncl" />
              
            </p>
            <h3 className="md:text-xl text-xs font-semibold">Super Shops</h3>
          </Link>

          <Link className="bg-mainbg hover:bg-[#003b7a] transition-colors duration-300 text-white rounded-2xl shadow-lg border-t-4 border-btncl p-4 md:p-6 flex flex-col items-center justify-center space-y-4 cursor-pointer hover:scale-105">
            <p>
              <IoRestaurantSharp className="md:text-4xl text-2xl text-btncl" />
              
            </p>
            <h3 className="md:text-xl text-xs font-semibold">Restaurants</h3>
          </Link>

          <Link className="bg-mainbg hover:bg-[#003b7a] transition-colors duration-300 text-white rounded-2xl shadow-lg border-t-4 border-btncl p-4 md:p-6 flex flex-col items-center justify-center space-y-4 cursor-pointer hover:scale-105">
            <p>
              <MdOutlineLocalGroceryStore className="md:text-4xl text-2xl text-btncl" />
              
            </p>
            <h3 className="md:text-xl text-xs font-semibold">Local Markets</h3>
          </Link>
          <Link className="bg-mainbg hover:bg-[#003b7a] transition-colors duration-300 text-white rounded-2xl shadow-lg border-t-4 border-btncl p-4 md:p-6 flex flex-col items-center justify-center space-y-4 cursor-pointer hover:scale-105">
            <p>
              <FaMapLocationDot className="md:text-4xl text-2xl text-btncl" />
              
            </p>
            <h3 className="md:text-xl text-xs font-semibold">Tourist Attractions</h3>
          </Link>
          <Link className="bg-mainbg hover:bg-[#003b7a] transition-colors duration-300 text-white rounded-2xl shadow-lg border-t-4 border-btncl p-4 md:p-6 flex flex-col items-center justify-center space-y-4 cursor-pointer hover:scale-105">
            <p>
              <BsBusFront className="md:text-4xl text-2xl text-btncl" />
              
            </p>
            <h3 className="md:text-xl text-xs font-semibold">Transportation</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Category;
