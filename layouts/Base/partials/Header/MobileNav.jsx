import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import MobileLogo from "assets/svgs/mobilelogo.svg";
import CloseIcon from "assets/svgs/close.svg";

const MobileNav = ({ open, cycleOpen }) => {
  const links = [
    { name: "Products", to: "/mro", id: 1 },
    { name: "Services", to: "/training", id: 3 },
    { name: "About", to: "/mro", id: 4 },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
      scale: 0,
    },
    open: { opacity: 1, scale: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.section
        initial={{ width: 0 }}
        animate={{
          width: "100%",
        }}
        exit={{
          width: 0,
          transition: { delay: 0.2, duration: 0.3 },
        }}
        className="bg-dark-blue fixed top-0 left-0 z-[9000] w-full h-full"
      >
        {open && (
          <>
            <div className="flex items-center justify-between p-8">
              <Link passHref href="/">
                <figure className="flex items-center justify-center basis-[1/4]  cursor-pointer">
                  <MobileLogo />
                </figure>
              </Link>

              <button onClick={cycleOpen}>
                <CloseIcon />
              </button>
            </div>

            <motion.aside
              className="p-8"
              initial={{ width: 0 }}
              animate={{
                width: "100%",
              }}
              exit={{
                width: 0,
                transition: { delay: 0.1, duration: 0.3 },
              }}
            >
              <motion.div
                initial="closed"
                className="flex flex-col"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {links.map(({ name, to, id }) => (
                  <Link
                    href={to}
                    key={id}
                    passHref
                    className="flex items-center hover:text-green mb-4"
                  >
                    <motion.a variants={itemVariants}>
                      <span className="font-body  text-white hover:text-green  mr-4 ">
                        {name}
                      </span>
                    </motion.a>
                  </Link>
                ))}
              </motion.div>
            </motion.aside>
          </>
        )}
      </motion.section>
    </AnimatePresence>
  );
};

export default MobileNav;
