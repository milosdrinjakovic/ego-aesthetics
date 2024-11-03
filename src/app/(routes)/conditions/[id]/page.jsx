"use client"
import ImageSlider from "@/app/components/ImageSlider";
import Image from "next/image";
export default function Condition() {
  return (
    <div className="pt-60  flex flex-col justify-center items-center bg-zinc-50">
        <div className="flex flex-col items-center space-y-10 mb-10 w-full justify-center">
        <div>
        <p className="text-5xl">DRY OR REHYDRATED SKIN</p>
      </div>
      <div className="w-3/6  leading-relaxed text-center text-ellipsis">
        <p className="">
          Dehydrated skin is a condition that occurs when there’s a lack of
          water in the skin. This can happen to anyone, regardless of skin type
          — people with oily or combination skin can still experience
          dehydration. Dehydrated skin typically looks dull and can show
          premature signs of aging, like surface wrinkles and loss of
          elasticity. In dry skin water isn’t the problem. Dry skin is a skin
          type, like oily or combination skin, where the complexion lacks oils,
          or lipids, so it takes on a more flaky, dry appearance. You may also
          see a scaly appearance, white flakes, redness or irritation and
          increased incidence of psoriasis, eczema, or dermatitis.
        </p>
      </div>
        </div>
      
    
      <div className="flex w-full h-64 md:h-80 lg:h-96 xl:h-[40vh]">
        <div className="relative w-1/2 h-full">
          <Image
            src="/images/navmenu/Uneven+Skin+Tone.png"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="w-full h-full"
          />
        </div>
        <div className="relative w-1/2 h-full">
          <Image
            src="/images/navmenu/Other+conditions.jpeg"
            alt="Image 2"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-full flex justify-center  h-full">
      <div className="flex justify-center w-2/3 space-x-14 text-left py-20">
        <div className="flex-1">
          <p className="text-3xl my-4">SYMPTOMS</p>
          <p>
            Fine lines are caused by the natural breakdown of collagen and
            elastin in the skin combined with ageing and other factors such as
            sun exposure, smoking, lifestyle and genetics. Wrinkles are a
            natural part of the aging process. As people get older, their skin
            becomes thinner, drier, and less elastic, which means it is less
            able to protect itself from damage. This leads to wrinkles, creases,
            and lines on the skin.
          </p>
        </div>
        <div className="flex-1">
          <p className="text-3xl my-4">CAUSES</p>
          <p>
            Wrinkles are a natural part of the aging process. As people get
            older, their skin becomes thinner, drier, and less elastic, which
            means it is less able to protect itself from damage. This leads to
            wrinkles, creases, and lines on the skin. Facial expressions, such
            as smiling, frowning, or squinting, lead to the development of fine
            lines and wrinkles at a young age. These lines deepen as the person
            gets older. When a person is young, their skin springs back. As they
            get older, the skin loses its flexibility, and it becomes more
            difficult for the skin to spring back, resulting in permanent
            grooves.
          </p>
        </div>
        <div className="flex-1">
          <p className="text-3xl my-4">WHO IT CAN AFFECT</p>
          <p>
            Wrinkles are a natural part of growing older, and they affect
            everyone. However, many people dislike the appearance of wrinkles
            and there are many effective preventative treatments to help
            minimise the appearance or eradicate them altogether.
          </p>
        </div>
      </div>
      </div>
         
     
      <div className="flex justify-center pb-10  w-full">
        <div className="w-full px-32">
        <div className="flex justify-center m-10">
            <p className="text-4xl pb-10">TREATMANT OPTIONS</p>
        </div>
        <div className="">
            <ImageSlider/>
        </div>
        </div>
        
      </div>
    </div>
  );
}
