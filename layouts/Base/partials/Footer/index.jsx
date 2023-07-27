import Logo from "assets/svgs/logo.svg";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const landings = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Product",
      link: "/",
    },
    {
      title: "Services",
      link: "/",
    },
  ];

  const companies = [
    {
      title: "Abouts",
      link: "/",
    },
    {
      title: "Careers",
      link: "/",
      isHiring: true,
    },
    {
      title: "Features",
      link: "/",
    },
  ];
  return (
    <footer className="footer fit-x-bleed py-28">
      <section className="flex flex-col text-gray">
        <figure>
          <Logo />
        </figure>
        <p className="pt-10 pb-10 xlg:pb-16 ">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <p>All rights reserved. &copy; {currentYear} </p>
      </section>
      <section className="grid  grid-cols-1 tab:grid-cols-3 xlg:ml-10 mt-4">
        <ul className="mb-4">
          <li>Landings</li>
          {landings.map((landing) => {
            return (
              <li key={landing.title}>
                <Link href="/hodod">{landing.title}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="mb-4">
          <li>Company</li>
          {companies.map((landing) => {
            return (
              <li key={landing.title}>
                <Link href="/hodod">{landing.title}</Link>
                {landing?.isHiring && (
                  <p className="bg-green text-dark-blue font-bold text-xs rounded-[120px] p-3 ml-3">
                    Hiring
                  </p>
                )}
              </li>
            );
          })}
        </ul>
        <ul className="mb-4">
          <li>Resources</li>
          {landings.map((landing) => {
            return (
              <li key={landing.title}>
                <Link href="/hodod">{landing.title}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
