/* eslint-disable @next/next/no-img-element */
import RightArrow from "assets/svgs/right-arrow.svg";
import LeftArrow from "assets/svgs/left-arrow.svg";
const Testimonials = () => {
  const _testimonials = [
    {
      title: "Manager",
      name: "Albus Dumbledore",
      content:
        "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      company: "Howarts",
    },
    {
      title: "Manager",
      name: "Severus Snape",
      content:
        "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      company: "Manager @ Slytherin",
    },
    {
      title: "Team Leader",
      name: "Harry Potter",
      content:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      company: "Gryffindor",
    },
  ];

  return (
    <section className="fit-x-bleed flex flex-col py-32 bg-dark-blue">
      <div className="flex flex-col lg:flex-row justify-between items-end ">
        <h3 className="header-text text-white mr-4">
          An enterprise template to ramp up your company website
        </h3>
        <div className="flex items-center mt-6">
          <button className="testimonial__btn mr-7">
            <LeftArrow />
          </button>
          <button className="testimonial__btn">
            <RightArrow />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-[72px]">
        {_testimonials.map((_testimonial) => {
          return (
            <div key={_testimonial.name}>
              <div className="flex flex-col bg-white rounded-xl p-10">
                <h3 className="content-text text-black mb-10">
                  {_testimonial.content}
                </h3>
                <div className="flex items-center">
                  <figure className="h-8 w-8 rounded-full overflow-y-hidden mr-4">
                    <img
                      className="img-fill"
                      src="/images/office.png"
                      alt="office"
                    />
                  </figure>
                  <div className="flex flex-col text-dark-blue">
                    <h4 className="font-sans text-base font-bold">
                      {_testimonial.name}
                    </h4>
                    <p className="font-sans text-sm font-normal">{`${_testimonial.title} @ ${_testimonial.company}`}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
