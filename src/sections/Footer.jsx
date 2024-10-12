import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex flex-col items-center justify-between w-full">
          
          <div className="flex justify-center gap-10 mt-5">
            <div className="text-center">
              <img
                src="/images/akshatdp.png"
                alt="Akshat Srivastava"
                className="rounded-full h-24 w-24 object-cover mb-2 mx-auto"
              />
              <p>Akshat Srivastava</p>
              <p>
                <a href="tel:9438046114" className="text-p5 transition-all duration-500 hover:text-p1">8765335280</a><br />
                <a href="mailto:ankitkumarsoni656.iitkgp@gmail.com" className="text-p5 transition-all duration-500 hover:text-p1">akshat2k24@gmail.com</a>
              </p>
            </div>
            <div className="text-center">
              <img
                src="/images/ankitdp.jpeg"
                alt="Ankit Kumar Soni"
                className="rounded-full h-24 w-24 object-cover mb-2 mx-auto"
              />
              <p>Ankit Kumar Soni</p>
              <p>
                <a href="tel:9438046114" className="text-p5 transition-all duration-500 hover:text-p1">9438046114</a><br />
                <a href="mailto:ankitkumarsoni656.iitkgp@gmail.com" className="text-p5 transition-all duration-500 hover:text-p1">ankitkumarsoni656.iitkgp@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          

          {/* Privacy Policy and Terms of Use */}
          <div className="small-compact text-center mt-6">
            <p>Meghnad Saha Hall of Residence</p>
            <p>IIT Kharagpur, West Bengal</p>
          </div>
          <ul className="flex justify-center gap-3 mt-5">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center mt-5">
          <p className="opacity-70 mr-20">@Copyright, DevLaunch-2024</p>
            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              Privacy Policy
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1">
              Terms of Use
            </p>
            <p className="opacity-70 mr-20 ml-20">Made with ❤️ in India </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
