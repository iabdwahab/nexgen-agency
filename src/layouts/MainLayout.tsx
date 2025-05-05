import { Outlet } from "react-router-dom";
import Header from "../components/header/Index";
import Testimonials from "../components/testimonials/Index";
import FAQs from "../components/faqs/Index";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Testimonials />
      <FAQs />
    </>
  );
}
export default MainLayout;
