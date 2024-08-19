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
        className="background-cover bg-cover bg-center h-screen flex"
        style={{ backgroundImage: "url('/images/hero1.jpeg')" }}
      >
        <div className="container flex justify-center items-center h-full">
          <div className="text-white w-1/3">
            <h1 className="text-6xl text-rose-500 font-serif">
              Antiaging procedure
            </h1>
            <p className="mt-4 text-lg">
              Regenerativni tretmani za svežinu i sjaj vaše kože
            </p>
            <button className=" mt-6 border-2 border-white text-white px-5 py-3">
              SAZNAJ VIŠE{" "}
              <span className=" text-2xl text-rose-500">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-full"
        style={{ backgroundImage: "url('/images/bg-1.jpg')" }}
      >
        <div className="flex justify-between items-center mx-auto w-3/4 p-20 text-center">
          <div className="flex flex-col justify-center items-center w-2/4">
            <h1 className="text-5xl font-serif">
              Posetite naš salon i doživite osećaj lepote i stila!
            </h1>
            <div className="border-t-2 border-rose-400 my-5 w-full"></div>
            <p className="mt-5 text-justify">
              <span className="text-rose-400 text-2xl font-serif">
                Ego Aesthetics
              </span>{" "}
              je luksuzni salon lepote koji teži da stvori dela umetnosti
              primenjujući najnovije trendove u oblikovanju, dizajnu i bojenju
              kose kako za muškarce, tako i za žene po pristupačnim cenama.
              Posvećeni smo unapređenju vaše prirodne lepote sa svakom posetom.
            </p>
            <button className="mt-6 border-2 border-rose-400 text-rose-400 px-5 py-3">
              SAZNAJ VIŠE <span className="text-2xl text-rose-500">&rarr;</span>
            </button>
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
      <CustomerFeedbackGallery/>
      <DoctorsSection   />

    </>
  );
}
