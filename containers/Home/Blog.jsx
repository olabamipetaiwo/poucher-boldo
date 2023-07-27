/* eslint-disable @next/next/no-img-element */
import ServiceOne from "assets/svgs/service-1.svg";
import ServiceTwo from "assets/svgs/service-2.svg";
import ServiceThree from "assets/svgs/service-3.svg";
import ArrowRight from "assets/svgs/arrow-right.svg";

const Blog = () => {
  const _services = [
    {
      id: "5ikmt",
      icon: <ServiceOne />,
      title: "Cool feature title",
      link: "/cool",
    },
    {
      id: "ft5ikmt",
      icon: <ServiceTwo />,
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
    <section className="bg-white fit-x-bleed py-24 flex flex-col items-center text-black">
      <h2 className="text-center title-text font-sans mb-4 text-gray">
        Our Blog
      </h2>
      <p className="text-center lg:w-3/4 header-text font-body mb-16 text-black ">
        Value proposition accelerator product management venture
      </p>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
        {_services.map((_item) => {
          return (
            <div
              className="flex flex-col items-start text-black"
              key={_item.id}
            >
              <figure className="rounded-3xl overflow-hidden h-[209px] mb-6">
                {_item.icon}
              </figure>
              <div className="flex flex-col">
                <div className="flex mb-2 text-base">
                  <h6 className="text-dark-blue mr-3 font-bold">Category</h6>
                  <p className="text-gray">November 22, 2021</p>
                </div>
                <p className="mb-5 title-text ">
                  Pitch termsheet backing validation focus release.
                </p>
                <div className="flex">
                  <figure className="h-8 w-8 rounded-full overflow-y-hidden">
                    <img
                      className="img-fill"
                      src="/images/lady.png"
                      alt="office"
                    />
                  </figure>
                  <p className="ml-2 caption-text ">Chandler Bing</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <div className="flex items-center justify-center">
        <button className="btn btn-outline">Load more</button>
      </div>
    </section>
  );
};

export default Blog;
