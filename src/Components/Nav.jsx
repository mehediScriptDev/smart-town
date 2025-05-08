const Nav = () => {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Places</a>
      </li>
      <li>
        <a>Shops</a>
      </li>
    </>
  );
  return (
    <section className="w-11/12 mx-auto">
      <div className="flex justify-between bg-base-100">
        <div >
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">SmartTown</a>
        </div>
        <div className="flex items-center gap-3">
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            {links}
          </ul>
        </div>
        <div className="">
          <a className="btn rounded-md">Assist</a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
