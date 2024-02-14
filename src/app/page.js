import Image from "next/image";
import TextileGraph from "./components/TextileGraph";
import HeroSection from "./components/Ui/HeroSection/HeroSection";
import Gallery from "./components/Ui/Gallery/Gallery";
import ContactUs from "./components/Ui/ContactUs/ContactUs";
import CardSection from "./components/Ui/CardSection/CardSection";
import GlobalWaste from "./components/Ui/GlobalWaste/GlobalWaste";
import PieChartSection from "./components/Ui/Graph/PieChartSection";
import GlobalTextileWaste from "./components/Ui/GlobalTextileWaste/GlobalTextileWaste";


export default function Home() {
  return (
    <main className="">
      <div className="w-[100%]">
        <HeroSection />
        <GlobalWaste/>
        <div className="w-100vh">
         <GlobalTextileWaste/>
      <PieChartSection/>
        </div>
        <CardSection />
        <Gallery />
        <ContactUs />

        {/* <div className="h-[100vh]">

        <TextileGraph />
        </div> */}
      </div>
    </main>
  );
}
