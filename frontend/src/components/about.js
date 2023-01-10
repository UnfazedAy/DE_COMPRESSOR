import Aboutimg from "./../img/about.webp";
import Navbar from "./Landingpage/navbar";
import { Link } from "react-router-dom";
import Footer from "./Landingpage/footer";
import Jedda from "./../img/jedda.webp";
import Victor from "./../img/vic.webp";
import Ay from "./../img/ay.webp";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about_div">
        <div className="div">
          <h1>ABOUT</h1>
        </div>
        <div
          style={{ backgroundImage: `url(${Aboutimg})` }}
          className="about_header"
        >
          <div id="overlay"></div>
        </div>
      </div>
      <div className="container t py-5 text">
        <p>
          We are a dedicated team of 3 software engineers who are passionate
          about creating tools that help people optimize and manage their
          digital assets. We understand the importance of images in today's
          digital world, and we strive to make the process of compressing them
          as easy and efficient as possible. That's why we created our De
          Compressor, which offers a fast and user-friendly way to reduce the
          size of images without compromising on quality.
          {/* <hr /> */}
            <br />
            <br />
          <strong>De Compressor</strong> uses the latest image compression
          algorithms and technology to analyze and optimize each image, reducing
          the file size without affecting the visual integrity. Our algorithm
          compare different compression options, such as quality and resolution,
          and chooses the one that best suits each image. This not only saves
          you storage space, but also speeds up your website or application by
          reducing the time it takes to download the images. We support a wide
          variety of image file formats, including JPG, JPEG, and PNG.
          {/* <hr /> */}
            <br />
            <br />
          We understand that every image is different and requires a different
          optimization. That's why we have a wide range of customizable options,
          such as resolution, quality, and metadata. Our website also allows you
          to compress multiple images at once, so you don't have to do it one by
          one, saving you time and effort.
          {/* <hr /> */}
            <br />
            <br />
          We are dedicated to making our service accessible to everyone, which
          is why we offer a free version. We understand the importance of
          privacy, so we ensure that all images uploaded to our server in the
          free version are deleted immediately after compression and images from
          registered customers are saved in a secure database. We also take
          security seriously, so you can trust that your images are safe with
          us.
          {/* <hr /> */}
            <br />
            <br />
          Our team is always working on improving our image compression website
          and adding new features. We are committed to providing the best
          service possible, and we're always open to feedback and suggestions.
          We also have a knowledge base and support center with frequently asked
          questions and troubleshoot tips, so you can get the most out of our
          service.
          {/* <hr /> */}
            <br />
            <br />
          The benefits of using <strong>De Compressor</strong> are numerous. Not
          only will you save storage space, but also you will improve your
          website's load time, which will result in a better user experience.
          This will also help you to increase your website's ranking on search
          engines.
          {/* <hr /> */}
            <br />
            <br />
          We're proud of the work we've done to create this image compression
          website and we hope it can help make your digital life a little bit
          easier. Thank you for choosing our service.
          {/* <hr /> */}
            <br />
            <br />
          <br />
          Please{" "}
          <Link to="/contactus" className="about_link">
            {" "}
            let us know
          </Link>{" "}
          if you have any question or need any further assistance.
        </p>
      </div>
      <div className="">
        <hr className="mb-5 " />
        <h1 className="text-center fw-bold fs-1 mt-5 mb-4">MEET THE TEAM</h1>

        <div className="meet_div">
          <div>
            <div className="team_card rounded">
              <img
                src={Jedda}
                className="rounded-pill img-thumbnail meet_img"
                alt=""
              />
              <h4>Fatihah Oduwole</h4>
              <div className="socials">
                <a href="" target='_blank'>
                  <ion-icon name="mail-outline" className="icon"></ion-icon>
                </a>
                <a href="" target='_blank'>
                  <ion-icon name="logo-linkedin" className="icon"></ion-icon>
                </a>
                <a href="" target='_blank'>
                  <ion-icon name="logo-twitter" className="icon"></ion-icon>
                </a>
                <a href="" target='_blank'>
                  <ion-icon name="logo-instagram" className="icon"></ion-icon>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="team_card rounded">
              <img
                src={Victor}
                className="rounded-pill img-thumbnail meet_img"
                alt=""
              />
              <h4>Victor Nwosu</h4>
              <div className="socials">
                <a href="mailto:nwosuvictor54@gmail.com" target='_blank'>
                  <ion-icon name="mail-outline" className="icon"></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/nwosu-victor/" target='_blank'>
                  <ion-icon name="logo-linkedin" className="icon"></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/nwosu-victor/" target='_blank'>
                  <ion-icon name="logo-twitter" className="icon"></ion-icon>
                </a>
                <a href="https://www.instagram.com/iamlongvic/" target='_blank'>
                  <ion-icon name="logo-instagram" className="icon"></ion-icon>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="team_card rounded">
              <img
                src={Ay}
                className="rounded-pill img-thumbnail meet_img"
                alt=""
              />
              <h4>Ayomide Soniyi</h4>
              <div className="socials">
                <a href="mailto:ayomidesoniyi@gmail.com" target='_blank'>
                  <ion-icon name="mail-outline" className="icon"></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/ayomide-soniyi-3151461a5" target='_blank'>
                  <ion-icon name="logo-linkedin" className="icon"></ion-icon>
                </a>
                <a href="https://twitter.com/SoniyiAyomide_?t=tteA9SCa6-iCUr6XVztPCg&s=09" target='_blank'>
                  <ion-icon name="logo-twitter" className="icon"></ion-icon>
                </a>
                <a href="" target='_blank'>
                  <ion-icon name="logo-instagram" className="icon"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
