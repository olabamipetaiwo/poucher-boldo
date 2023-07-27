/* eslint-disable @next/next/no-img-element */

const Newsletter = () => {
  return (
    <section className="bg-dark-blue mx-8 sm:mx-16 tab:mx-20 lg:mx-24 py-24 flex flex-col items-center text-white  rounded-xl">
      <p className="text-center w-3/4 header-text font-body mb-16">
        An enterprise template to ramp up your company website
      </p>

      <section className="form w-[80%] lg:w-1/2 mx-auto">
        <div className="form-group basis-[60%]">
          <input name="email" type="email" placeholder="Your email address" />
        </div>
        <button className="btn btn-secondary">Start now</button>
      </section>
    </section>
  );
};

export default Newsletter;
