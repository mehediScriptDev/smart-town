import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const images = [

  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/94/5b/61/mohera-jomidar-bari.jpg?w=1400&h=1400&s=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499218110.jpg?k=8c01cf92f0d36c54eb07d56695faabb3181e506be231e5d1a113c6f2bac5217d&o=&hp=1",
  "https://images.hive.blog/DQmcwmx3hYm544ykjzoziveDzPPj5Rreqgu47CfewHk6d3g/IMG_1679300179138.jpg",
  "https://bdsearcher.com/wp-content/uploads/2017/12/Nagarpur-Zamindar-Bari.jpg",
  "https://lh3.googleusercontent.com/p/AF1QipOkuR4jS2Ae1n03NHlasD9J6MCP6NkRtfPrZYgS=w540-h312-n-k-no",
  "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQKCtUgN6B4dPqy1vPwa6-T6jRENZCc_GiAx-Lj0sF_EDPtDjrqwzLFWyntoMtwowUxWz04SeYADrG6zkNjXaZp_hR_htOAejz1T_cyorM",
  "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noPoFXYT_i-6Ix7jl0cwPEb6SygwDtIPBcD_O-HhJ1zlWw-FuI8hhawhwDOT2yBMa6oYgCxPHgpQSKfciP7BS_-1poWxEWRBL4Y0s_w4OofoKjW1SmnXQ8IYawYK5UUxqIMDlC8=w540-h312-n-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nonN5j-j4cgU4bZs-oZkuJ2dKFXxIQXVcji4EBCCt3DrtFQ-9Izeyfuu3PG2ApCgGwg-Q88BmosUVQZyGzPVOYLgYnjolQm0v5hnX5yAX6a_hG5VfeY7l1vSvzrh_0lQ2Z8Wz0=w540-h312-n-k-no",
  "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQnR4g2_rKfJurbwChJVWphfbF4eApXRn1W2vkK2uby80kjR61nzgvGWA_KWDReAGAtcxs6Eim8xeujUxHGgjvcN4TMuFg5f7WYCXwGkCQ",
  "https://lh3.googleusercontent.com/p/AF1QipMASgKcZtws98B5sAF-u4lpH9YpzbSgrlyKpLYP=w540-h312-n-k-no",
  "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT9AJL7ZAYo2usnGUicMgtdaopb88yi06cm-DLSDDYNFQN8EirbI8JSMOiNi5Xw-9xdgfLw_mCDG8Bgzvx1Br63wIZP19bl7rZzuNxyu-U",
];

const Hero = () => {
  return (
    <section>
      <div className="bg-mainbg">
        <div className=" flex flex-col justify-center items-center w-10/12  mx-auto md:pt-5">
        <div className="bg-littlebg text-xs text-white px-3 py-1 mt-6 rounded-full">
          <p>Dont ask for chomchom </p>
        </div>
          <h1 className="font-plus text-center font-bold text-3xl md:text-5xl text-white py-3">
            Welcome to Tangail
          </h1>
          <p className="font-semibold text-center font-plus text-sm md:w-8/12 pb-3 text-textcl">
            Tangail is a vibrant district town in central Bangladesh, known for
            its rich cultural heritage, traditional handloom sarees, and warm
            hospitality. 
          </p>
          <div className="pb-5">
            <a href="#explore" className="btn bg-btncl text-mainbg rounded-full hover:bg-white duration-100">Explore Tangail</a>
          </div>
        </div>
        <div id="explore" className="col-span-6 bg-mainbg">
          <div className="">
          <Carousel useKeyboardArrows={true}>
            {images.map((URL, index) => (
              <div className="slide border-mainbg border-2">
                <img className="min-h-8" alt="sample_file" src={URL} key={index} />
              </div>
            ))}
          </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
