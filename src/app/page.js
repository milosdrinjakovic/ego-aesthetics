import Image from "next/image";
import OfferingsSection from "./components/OfferingsSection";
import treatmantsData from "@/app/data/treatmants.json";
import logosData from "@/app/data/logos.json";
import LogoStrip from "./components/LogoStrip";
import QuoteBanner from "./components/QuoteBanner";
import CustomerFeedbackGallery from "./components/CustomerFeedbackGallery";
import DoctorsSection from "./components/doctors/DoctorsSection";

export default function Home() {
  return (
    <>
      <div
        className="background-cover bg-cover bg-center h-screen flex mt-20 "
        style={{ backgroundImage: "url('/images/hero/hero1.jpeg')" }}
      >
        <div className="container flex justify-center items-center h-full">
          <div className="text-white w-1/3">
            <h1 className="  headline text-6xl font-thin">
            Neinvazivne kozmetičke 
            i anti-aging procedure
            </h1>
            <p className="mt-4 text-lg">
           
            </p>
            <button className=" mt-6 border-2 border-white text-white px-5 py-3 hover:bg-salmon rounded hover:border-salmon">
              SAZNAJ VIŠE{" "}
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-full pt-10"
        style={{ backgroundImage: "url('/images/bg-1.jpg')" }}
      >
        <div className="flex justify-between items-center mx-auto w-3/4 p-20 text-center">
          <div className="flex flex-col justify-center items-center w-2/4">
            <p className="text-4xl headline">
            POSETITE NAŠ SALON I DOŽIVITE OSEĆAJ LEPOTE I STILA

            </p>
            <div className="border-t-2 border-salmon my-5 w-full"></div>
            <p className="mt-5 text-justify">
              <span className="text-salmon text-4xl headline">
                Ego Aesthetics 
              </span>{" "}
              je luksuzni salon lepote koji teži da stvori dela umetnosti
              primenjujući najnovije trendove u oblikovanju, dizajnu i bojenju
              kose kako za muškarce, tako i za žene po pristupačnim cenama.
              Posvećeni smo unapređenju vaše prirodne lepote sa svakom posetom.
            </p>
            <div>
            
            </div>
            
          </div>
          <div className="flex justify-center my-12 mx-auto">
            <img
              src="/images/salon1.jpg"
              alt=""
              className="w-96 h-96 object-cover rounded-tl-9xl rounded-br-9xl rounded-bl-4xl rounded-tr-4xl"
            />
          </div>
        </div>
      </div>
     
      <OfferingsSection data={treatmantsData} />
      <LogoStrip data={logosData} />
      <QuoteBanner />
      <CustomerFeedbackGallery />
      <DoctorsSection />
    </>
  );
}
