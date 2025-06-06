import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../../public/logo.png";
const Nav = () => {
  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Places</NavLink>
      </li>
      <li>
        <NavLink>Shops</NavLink>
      </li>
      <li>
        <NavLink>Emergency</NavLink>
      </li>
      <li>
        <NavLink>About Us</NavLink>
      </li>
    </>
  );
  return (
    <section className="bg-mainbg py-2 fixed top-0 w-full z-50 ">
      <div className="w-10/12 mx-auto *:text-white">
        <div className="flex justify-between items-center border-b-4  border-mainbg">
          <div className="flex items-center gap-4">
            <div className="flex items-center ">
              <div className="dropdown ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden bg-mainbg"
                >
                  <IoMenu className="text-xl" />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-mainbg  rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  {links}
                </ul>
              </div>
              <div className="hidden md:block">
                <img className="w-10" src={logo} alt="logo" />
              </div>
              <a className="join text-2xl md:text-3xl flex items-center">
                <span className="font-alfa font-semibold join-item">Smart</span>
                <span className="join-item font-italy text-btncl">Town</span>
              </a>
            </div>
            <div className=" hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <a href="https://en.wikipedia.org/wiki/Tangail_District" target="_blank" className="btn btn-ghost hover:bg-mainbg hover:text-white hover:border-transparent hidden md:flex">
              History
            </a>
            <a className="btn btn-sm md:btn-md btn-outline rounded-full hover:text-mainbg hover:bg-btncl hover:border-transparent">
              Featured Places
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
