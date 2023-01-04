import hero from "./../../img/heroimg.png";

export default function Hero() {
  return (
    <div className="Hero_container relative d-block m-auto d-md-flex ">
      
      <div className="hero_context container d-md-flex  justify-content-between mt-md-5 relative">
       
        <div className="hero_text py-5">
           <h1 className="hero_bg_text d-md-block container">Compress Your Images, Fast!</h1>
          {/* <h1 className="fs-1">
          Compress Your Images, Fast!
          </h1> */}
          <button className='btn button-primary bg-black text-white rounded-pill px-4 py-2 my-3'>
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
