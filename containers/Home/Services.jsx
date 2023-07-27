/* eslint-disable @next/next/no-img-element */
import ServiceOne from "assets/svgs/service-1.svg";
import ServiceTwo from "assets/svgs/service-2.svg";
import ServiceThree from "assets/svgs/service-3.svg";
import ArrowRight from "assets/svgs/arrow-right.svg";

const Services = () => {
  const _services = [
    {
      id: "5ikmt",
      icon: <ServiceOne />,
      title: "Cool feature title",
      link: "/cool",
    },
    {
      id: "ft5ikmt",
      icon: <ServiceTwo className="absolute left-0 top-0 w-full h-full" />,
      title: "Even cooler feature",
      link: "/cool",
    },
    {
      id: "asd5ikmt",
      icon: <ServiceThree />,
      title: "Another feature title",
      link: "/cool",
    },
  ];
  return (
    <section className="bg-dark-blue fit-x-bleed py-24 flex flex-col text-white">
      <h2 className="text-center title-text font-sans mb-4">Our services</h2>
      <p className="text-center lg:w-3/4 header-text font-body mb-16 mx-auto ">
        Handshake infographic mass market crowdfunding iteration.
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-y-16 gap-x-24 ">
        {_services.map((_item) => {
          return (
            <div className="flex flex-col items-start" key={_item.id}>
              <figure className="rounded-3xl overflow-hidden h-[354px] w-full mb-6 relative">
                {_item.icon}
              </figure>
              <div className="flex flex-col">
                <h6 className="content-text text-white mb-7">{_item.title}</h6>
                <button className="flex justify-start hover:bg-white border-b-2 border-b-white pb-2 group transition-all hover:p-3">
                  <span className="mr-3 font-sans font-bold text-xl text-white group-hover:text-dark-blue">
                    Explore page
                  </span>{" "}
                  <ArrowRight className="group-hover:stroke-dark-blue stroke-white" />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Services;
