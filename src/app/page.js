import Image from "next/image";
import TextileGraph from "./components/TextileGraph";
import HeroSection from "./components/Ui/HeroSection/HeroSection";
import Gallery from "./components/Ui/Gallery/Gallery";
import ContactUs from "./components/Ui/ContactUs/ContactUs";
import CardSection from "./components/Ui/CardSection/CardSection";

export default function Home() {
  return (
    <main className="">
      <div className="w-[100%]">
        <HeroSection />
        <CardSection />
        <Gallery />
        <ContactUs />
        {/* <TextileGraph /> */}
      </div>
    </main>
  );
}
