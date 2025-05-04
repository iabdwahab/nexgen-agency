import HomeLanding from "../components/home_landing/Index";
import OurServices from "../components/our_services/Index";
import OurWorks from "../components/our_works/Index";
import ReasonsToChoose from "../components/reasons_to_choose/Index";

function Home() {
  return (
    <>
      <HomeLanding />
      <ReasonsToChoose />
      <OurServices />
      <OurWorks />
    </>
  );
}
export default Home;
