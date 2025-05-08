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
      <section className="grid grid-cols-10 min-h-screen">
        <div className="col-span-6 flex justify-center flex-col max-w-2xl">
          <h1 className="font-plus font-bold text-5xl text-mainbg py-3">
            Welcome to Tangail
          </h1>
          <p className="font-semibold">
            Tangail is a vibrant district town in central Bangladesh, known for
            its rich cultural heritage, traditional handloom sarees, and warm
            hospitality. Situated by the Louhajang River, the town blends urban
            development with natural beauty. From historic sites to scenic
            spots, Tangail offers a glimpse into both the past and the future of
            Bangladesh.
          </p>
        </div>
        <div className="box col-span-4">
          <Carousel useKeyboardArrows={true}>
            {images.map((URL, index) => (
              <div className="slide">
                <img alt="sample_file" src={URL} key={index} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </section>
  );
};

export default Hero;
