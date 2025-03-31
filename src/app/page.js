import Image from "next/image";
import OfferingsSection from "./components/OfferingsSection";
import treatmantsData from "@/app/data/treatmants.json";
import logosData from "@/app/data/logos.json";
import LogoStrip from "./components/LogoStrip";
import QuoteBanner from "./components/QuoteBanner";
import CustomerFeedbackGallery from "./components/CustomerFeedbackGallery";
import DoctorsSection from "./components/doctors/DoctorsSection";
import TextAnimation from "./components/animations/TextAnimation";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
   <HeroSection/>
      <div
        className="w-full pt-10"
        style={{ backgroundImage: "url('/images/bg-1.jpg')" }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center mx-auto w-11/12 md:w-3/4 p-10 md:p-20 text-center">
  <div className="flex flex-col justify-center items-center md:w-2/4 mb-10 md:mb-0">
  <TextAnimation>
    <p className="text-2xl md:text-4xl headline">
      POSETITE NAŠ SALON I DOŽIVITE OSEĆAJ LEPOTE I STILA
    </p>
    <div className="border-t-2 border-salmon my-5 w-full"></div>
    <p className="mt-5 text-justify text-sm md:text-base">
      <span className="text-salmon text-2xl md:text-4xl headline">
        Ego Aesthetics
      </span>{" "}
      je luksuzni salon lepote koji teži da stvori dela umetnosti primenjujući
      najnovije trendove u oblikovanju, dizajnu i bojenju kose kako za muškarce,
      tako i za žene po pristupačnim cenama. Posvećeni smo unapređenju vaše
      prirodne lepote sa svakom posetom.
    </p>
    </TextAnimation>
  </div>
  <div className="flex justify-center mx-auto">
    <Image
      src="/images/saloon/salon3.jpg"
      alt=""
      className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-tl-9xl rounded-br-9xl rounded-bl-4xl rounded-tr-4xl"
      width={500}
      height={500}
    />
  </div>
</div>

      </div>

      <OfferingsSection />
      <LogoStrip data={logosData}  />
      <QuoteBanner />
      <CustomerFeedbackGallery />
     
      <DoctorsSection />
    </>
  );
}
