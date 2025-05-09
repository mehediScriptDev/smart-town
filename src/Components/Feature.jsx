import atiya from "../images/atiya-jame-mosjid.jpg";
import mohera from "../images/mohera-jomidar-bari.jpg";
import pakutia from "../images/pakutia.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";

const Feature = () => {
  return (
    <section className="mt-16 bg-white">
      <div className="w-11/12 mx-auto">
        <h1 className="font-plus text-center font-bold  text-3xl md:text-4xl text-mainbg py-2">
          Featured Places
        </h1>
        <p className="text-center font-semibold text-xl text-gray-600 text-littlebg">
          Explore special spots across our town
        </p>

        <div>
          <div className="grid md:grid-cols-3  gap-5 gap-y-8 grid-cols-1 mt-10">
            <div className="card bg-mainbg transform hover:scale-105 relative duration-300 transition hover:bg-[#003b7a] shadow-sm">
              <figure>
                <img
                  src={atiya}
                  alt="place"
                  className="md:w-full xl:h-[15rem] object-cover"
                />
                <div className="absolute top-2 text-btncl bg-mainbg px-3 py-1 rounded-md font-semibold text-xs md:text-sm left-3">
                  <p>Mosque</p>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold md:text-2xl text-btncl">Atiya Mosque</h2>
                <p className="text-gray-300">
                  This mosque is a prominent landmark, blending Mughal and Sultanate architectural styles.
                </p>
                <div className="space-y-1 *:font-semibold">
                    <span className="flex text-gray-300 gap-1 items-center"><IoLocationOutline className="md:text-xl text-btncl" /> Delduar Upazila</span>
                    <span className="flex text-gray-300 gap-1 items-center"><MdOutlineAccessTime className="md:text-xl text-btncl" /> 9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="md:text-lg text-gray-300 font-semibold">Entry: 10tk</p>
                  <button className="btn btn-ghost text-btncl hover:text-mainbg">View Details</button>
                </div>
              </div>
            </div>

            <div className="card bg-mainbg transform hover:scale-105 relative duration-300 transition hover:bg-[#003b7a] shadow-sm">
              <figure>
                <img
                  src={pakutia}
                  alt="place"
                  
                />
                <div className="absolute top-2 text-btncl bg-mainbg px-3 py-1 rounded-md font-semibold text-xs md:text-sm left-3">
                  <p>Historic site</p>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold md:text-2xl text-btncl">Pakutia JomidarBari</h2>
                <p className="text-gray-300">
                  An impressive estate that once served as the residence of local zamindars
                </p>
                <div className="space-y-1 *:font-semibold">
                    <span className="flex text-gray-300 gap-1 items-center"><IoLocationOutline className="md:text-xl text-btncl" /> Nagarpur, Tangail</span>
                    <span className="flex text-gray-300 gap-1 items-center"><MdOutlineAccessTime className="md:text-xl text-btncl" /> 9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="md:text-lg text-gray-300 font-semibold">Entry: 10tk</p>
                  <button className="btn btn-ghost text-btncl hover:text-mainbg">View Details</button>
                </div>
              </div>
            </div>

            <div className="card bg-mainbg transform hover:scale-105 relative duration-300 transition hover:bg-[#003b7a] shadow-sm">
              <figure>
                <img
                  src={mohera}
                  alt="place"
                />
                <div className="absolute top-2 text-btncl bg-mainbg px-3 py-1 rounded-md font-semibold text-xs md:text-sm left-3">
                  <p>Historic site</p>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold md:text-2xl text-btncl">Mohera JomidarBari</h2>
                <p className="text-gray-300">
                  This historic site showcases the influence of local zamindars (landlords) in the region
                </p>
                <div className="space-y-1 *:font-semibold">
                    <span className="flex text-gray-300 gap-1 items-center"><IoLocationOutline className="md:text-xl text-btncl" /> Mirzapur, Tangail</span>
                    <span className="flex text-gray-300 gap-1 items-center"><MdOutlineAccessTime className="md:text-xl text-btncl" /> 9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="md:text-lg text-gray-300 font-semibold">Entry: 10tk</p>
                  <button className="btn btn-ghost text-btncl hover:text-mainbg">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
