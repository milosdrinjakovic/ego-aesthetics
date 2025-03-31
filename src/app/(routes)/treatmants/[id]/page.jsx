import { getTreatmentById, getAllTreatmentIds,getAllTreatments } from "@/lib/treatments";
import ContentSection from "@/app/components/ContentSection";
import FAQ from "@/app/components/ui/FAQ";

// Generišemo statičke parametre za sve tretmane
export async function generateStaticParams() {
  const treatments = getAllTreatmentIds(); 
  
  return treatments.map((treatment) => ({
    id: treatment.params.id, 
  }));
}


// Funkcija za renderovanje stranice sa podacima
export default async function TreatmentDetails({ params }) {
  const treatment = getTreatmentById(params.id); // Dohvatimo podatke za tretman

  if (!treatment) {
    return <div>Tretman nije pronađen.</div>;
  }

  return (
    <>
      <section className="sm:py-20">
        <ContentSection
          imageSrc={treatment.firstImage.src}
          title={treatment.title.toUpperCase()}
          description={treatment.treatment_details.description.join("\n")}
        />
      </section>

      <section className="py-2 sm:py-10 sm:w-2/5 w-full mx-auto">
        <div className="sm:text-center text-left px-5">
          <p className="text-3xl py-5 ">
            {treatment.treatment_details.what_is_it.question}
          </p>
          <p>
            {treatment.treatment_details.what_is_it?.answer ??
              treatment.treatment_details.when_is_it_used?.answer}
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[3fr_2fr_1fr] py-4  sm:py-10">
        <div className="col-span-2">
          <ContentSection
            imageSrc="/images/gallery/galery3.jpg"
            title={treatment.treatment_details.how_it_is_done.question.toUpperCase()}
            description={treatment.treatment_details.how_it_is_done.answer.join("\n") || treatment.treatment_details.how_it_is_done.join("\n")  }
            reverse
          />
        </div>

        <div className="flex flex-col bg-salmon text-white p-6">
          <div className="my-auto">
            <p className="font-bold">Trajanje tretmana:</p>
            <p>{treatment.treatment_details.treatment_info.duration || "N/A"}</p>

            <p className="font-bold mt-4">Nivo nelagodnosti tokom izvršavanja:</p>
            <p>{treatment.treatment_details.treatment_info.pain_level || "Minimalan"}</p>

            <p className="font-bold mt-4">Cena:</p>
            <p className=" text-center py-2">
              {treatment.treatment_details.price}
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:px-0 px-5">
        <div className="flex flex-col items-center justify-center sm:w-1/4 mx-auto">
          <FAQ faqData={treatment.FAQ_data} />
        </div>
      </section>
    </>
  );
}
