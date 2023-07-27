import BaseLayout from "@/layouts/Base";
import Hero from "@/containers/Home/Home";
import Services from "@/containers/Home/Services";
import Blog from "@/containers/Home/Blog";
import Newsletter from "@/containers/Home/Newsletter";
import FAQs from "@/containers/Home/Faqs";
import Features from "@/containers/Home/Features";
import Testimonials from "@/containers/Home/Testimonials";

const Home = () => {
  return (
    <BaseLayout>
      <Hero />
      <Services />
      {/* <Features />
      <Testimonials />
      <FAQs />
      <Blog />
      <Newsletter /> */}
    </BaseLayout>
  );
};

export default Home;
