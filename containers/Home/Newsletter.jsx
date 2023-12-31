/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
      className="bg-dark-blue mx-0 tab:mx-20 lg:mx-24 py-24 flex flex-col items-center text-white lg:rounded-xl news-bg"
    >
      <p className="text-center lg:w-3/4 header-text font-body mb-16">
        An enterprise template to ramp up your company website
      </p>

      <section className="form w-[80%] lg:w-1/2 mx-auto">
        <div className="form-group basis-full lg:basis-[60%] mb-4 lg:mb-0">
          <input name="email" type="email" placeholder="Your email address" />
        </div>
        <div className="basis-full lg:basis-[35%] ">
          <button className="btn btn-secondary !w-full">Start now</button>
        </div>
      </section>
    </motion.section>
  );
};

export default Newsletter;
