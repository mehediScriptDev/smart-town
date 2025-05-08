import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQKCtUgN6B4dPqy1vPwa6-T6jRENZCc_GiAx-Lj0sF_EDPtDjrqwzLFWyntoMtwowUxWz04SeYADrG6zkNjXaZp_hR_htOAejz1T_cyorM",
  "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noPoFXYT_i-6Ix7jl0cwPEb6SygwDtIPBcD_O-HhJ1zlWw-FuI8hhawhwDOT2yBMa6oYgCxPHgpQSKfciP7BS_-1poWxEWRBL4Y0s_w4OofoKjW1SmnXQ8IYawYK5UUxqIMDlC8=w540-h312-n-k-no",
  "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nonN5j-j4cgU4bZs-oZkuJ2dKFXxIQXVcji4EBCCt3DrtFQ-9Izeyfuu3PG2ApCgGwg-Q88BmosUVQZyGzPVOYLgYnjolQm0v5hnX5yAX6a_hG5VfeY7l1vSvzrh_0lQ2Z8Wz0=w540-h312-n-k-no",
];

const Hero = () => {
  return (
    <section>
      <div className=" bg-mainbg">
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
            <button className="btn bg-btncl text-mainbg rounded-full hover:bg-white duration-100">Explore Tangail</button>
          </div>
        </div>
        <div className="box col-span-6">
          <Carousel useKeyboardArrows={true}>
            {images.map((URL, index) => (
              <div className="slide border-mainbg border-2">
                <img className="" alt="sample_file" src={URL} key={index} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;
