/* eslint-disable @next/next/no-img-element */

import HeroIllustration from "assets/svgs/hero.svg";
import Boldo from "assets/svgs/logo.svg";
import Presto from "assets/svgs/presto.svg";

const Hero = () => {
  return (
    <header className="fit-x-bleed flex flex-col pt-40 bg-gray bg-opacity-10">
      <section className="grid grid-cols-2">
        <div className="flex flex-col">
          <h3 className="header-text text-dark-blue mt-16 mb-4">
            Save time by building fast with Boldo Template{" "}
          </h3>
          <p className="caption-text text-gray">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="flex items-center mt-12 mb-6">
            <button className="btn btn-primary mr-6">Buy template</button>
            <button className="btn btn-outline">Explore</button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <figure>
            <HeroIllustration />
          </figure>
        </div>
      </section>
      <section className="flex items-center justify-between py-20">
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
