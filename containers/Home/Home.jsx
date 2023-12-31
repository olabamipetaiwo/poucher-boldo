/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import HeroIllustration from "assets/svgs/hero.svg";
import Boldo from "assets/svgs/logo.svg";
import Presto from "assets/svgs/presto.svg";

const Hero = () => {
  return (
    <header className="fit-x-bleed flex flex-col pt-10 sm:pt-20 lg:pt-40 bg-white bg-opacity-10 header-bg">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="flex flex-col">
          <h3 className="header-text text-dark-blue mt-16 mb-4">
            Save time by building fast with Boldo Template{" "}
          </h3>
          <p className="caption-text text-gray">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="flex items-center mt-12 mb-6 flex-col sm:flex-row">
            <button className="btn btn-primary sm:mr-6 mb-4 sm:mb-0 w-full lg:w-[210px]">
              Buy template
            </button>
            <button className="btn btn-outline w-full lg:w-[210px]">
              Explore
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <figure className="overflow-hidden">
            <HeroIllustration className="img-fill" />
          </figure>
        </div>
      </section>
      <section className="companies">
        <figure>
          <Boldo />
        </figure>
        <figure>
          <Presto />
        </figure>
        <figure>
          <Boldo />
        </figure>
        <figure>
          <Presto />
        </figure>
        <figure>
          <Boldo />
        </figure>
      </section>
    </header>
  );
};

export default Hero;
