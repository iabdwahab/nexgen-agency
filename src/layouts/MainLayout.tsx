import { Outlet } from "react-router-dom";
import Header from "../components/header/Index";
import Testimonials from "../components/testimonials/Index";
import FAQs from "../components/faqs/Index";
import CTA from "../components/global/CTA";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Testimonials />
      <FAQs />
      <CTA />
    </>
  );
}
export default MainLayout;
