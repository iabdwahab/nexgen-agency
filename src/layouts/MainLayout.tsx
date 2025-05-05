import { Outlet } from "react-router-dom";
import Header from "../components/header/Index";
import Testimonials from "../components/testimonials/Index";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Testimonials />
    </>
  );
}
export default MainLayout;
