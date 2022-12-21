import hero from "./../img/heroimg.png";

export default function Hero() {
  return (
    <div className="Hero_container relative d-block m-auto d-md-flex ">
      
      <div className="hero_context container d-md-flex  justify-content-between mt-md-5 relative">
        <h1 className="hero_bg_text absolute d-none d-md-block">DE COMPRESSOR</h1>
        <div className="hero_text py-5">
          <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </h1>
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
