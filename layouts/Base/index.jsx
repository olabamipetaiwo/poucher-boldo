import Navbar from "./partials/Header";
import Footer from "layouts/Base/partials/Footer";

const BaseLayout = ({ children }) => {
  return (
    <>
      <main className="w-full bg-white relative">
        <Navbar />
        <section className="">{children}</section>
        <Footer />
      </main>
    </>
  );
};

BaseLayout.getInitialProps = async (ctx) => {
  return {
    path: "",
  };
};

export default BaseLayout;
