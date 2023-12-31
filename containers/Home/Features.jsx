/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import Mark from "assets/svgs/mark.svg";
import Eye from "assets/svgs/eye.svg";
import Light from "assets/svgs/light.svg";
import Feather from "assets/svgs/feather.svg";
import Pie from "assets/svgs/Pie.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { variant } from "@/utils/common";

const Features = () => {
  const _features = [
    "We connect our customers with the best.",
    "Advisor success customer launch party.",
    "Business-to-consumer long tail.",
  ];

  const _benefits = [
    {
      title: "We connect our customers with the best.",
      icon: <Feather />,
      isActive: true,
    },
    {
      title: "Advisor success customer launch party.",
      icon: <Eye />,
      isActive: false,
    },
    {
      title: "Business-to-consumer long tail.",
      icon: <Light />,
      isActive: false,
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="fit-x-bleed flex flex-col py-32 bg-gray bg-opacity-10">
      <motion.section className="grid grid-cols-1 lg:grid-cols-2  gap-x-36 mb-16 lg:mb-32">
        <div className="flex items-center justify-center relative">
          <figure className="w-full">
            <img className="img-fill" src="/images/man.png" alt="man" />
          </figure>
        </div>

        <div className="flex flex-col pt-16">
          <p className="font-body text-4xl leading-[56px] text-black mb-10">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>

          {_features.map((_feature) => {
            return (
              <div key={_feature} className="flex items-center mb-6 text-black">
                <Mark className="mr-4" />
                <p className="title-text ">{_feature}</p>
              </div>
            );
          })}

          <button className="btn btn-primary mt-12">Start now</button>
        </div>
      </motion.section>
      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-36 mb-16 lg:mb-40"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variant.moveUp}
      >
        <div className="flex flex-col pt-16">
          <p className="font-body text-4xl leading-[56px] text-black mb-10">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </p>

          {_benefits.map((_benefit) => {
            return (
              <div
                key={_benefit}
                className={`flex items-center mb-6 text-black rounded-[4px] p-4  ${
                  _benefit.isActive
                    ? "bg-dark-blue text-white"
                    : "bg-white text-dark-blue"
                }`}
              >
                {_benefit.icon}
                <p className="ml-7 font-sans font-semibold text-base">
                  {_benefit.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center relative  flex-col">
          <figure className="w-full">
            <img className="img-fill " src="/images/woman.png" alt="woman" />
          </figure>
          <div className="md:absolute z-10 -bottom-40  left-20 bg-white py-16 px-10 rounded-xl mt-10 md:mt-0">
            <figure className="flex items-center justify-center mb-6">
              <Pie />
            </figure>
            <div className="flex flex-col">
              <div className="flex items-center font-body">
                <div className="w-[5px] h-[5px] bg-blue-400 mr-2 rounded-full"></div>
                <p className="text-[28px] leading-[48px]">
                  35% - Agile Development
                </p>
              </div>
              <div className="flex items-center font-body">
                <div className="w-[5px] h-[5px] bg-green mr-2 rounded-full"></div>
                <p className="text-[28px] leading-[48px]">
                  30% - Investor Bandwidth
                </p>
              </div>
              <div className="flex items-center font-body">
                <div className="w-[5px] h-[5px] bg-gray mr-2 rounded-full"></div>
                <p className="text-[28px] leading-[48px]">35% - A/B Testing</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Features;
