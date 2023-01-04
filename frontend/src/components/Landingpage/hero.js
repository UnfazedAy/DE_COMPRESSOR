import hero from "./../../img/heroimg.png";

export default function Hero() {
  return (
    <div className="Hero_container relative d-block m-auto d-md-flex ">
      <div className="hero_context container d-md-flex  justify-content-between mt-md-5 relative">
        <div className="hero_text py-5">
          <h1 className="hero_bg_text d-md-block my-4">
            Compress Your Images, Fast!
          </h1>
          <h2 className="hero__text">
            Our image compression website makes it easy to reduce the size of
            your images without sacrificing quality. Sign up for a free trial
            and see for yourself how much you can save in bandwidth and load
            times.
          </h2>
          {/* <h1 className="fs-1">
          Compress Your Images, Fast!
          </h1> */}
          <button className="btn button-primary bg-black text-white rounded-pill px-4 py-2  mt-5">
            Compress Image
          </button>
        </div>
        <div className="hero_img_div m-auto">
          <img src={hero} alt="" className="hero_img" />
        </div>
      </div>
    </div>
  );
}
