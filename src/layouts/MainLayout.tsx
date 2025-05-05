import { Outlet } from "react-router-dom";
import Header from "../components/header/Index";
import Testimonials from "../components/testimonials/Index";
import FAQs from "../components/faqs/Index";
import CTA from "../components/global/CTA";
import Footer from "../components/footer/Index";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Testimonials />
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
}
export default MainLayout;
