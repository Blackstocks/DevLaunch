import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import Globe from "../components/globe.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Accelerate Success
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              At DevLaunch, we empower visionaries to bring their ideas to life
              with expert guidance and transparent development, ensuring every
              project is a collaborative journey towards success.
            </p>
            <a
              href="https://calendly.com/ankitkumarsoni656-iitkgp/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button icon="/images/zap.svg">Schedule a meet!</Button>
            </a>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <Globe></Globe>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
