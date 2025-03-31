"use client";
import ImageSlider from "@/app/components/ImageSlider";
import Image from "next/image";
import jsonConditions from "@/app/data/conditions.json";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Condition() {
  const { title } = useParams();
  const decodedTitle = title
    ? decodeURIComponent(title).split("-").join(" ").toUpperCase()
    : "";

  const [description, setDescription] = useState("");

  const [images, setImages] = useState([]);

  useEffect(() => {
    const condition = jsonConditions.find(
      (condition) =>
        condition.title?.toLowerCase() === decodedTitle.toLowerCase()
    );

    if (condition) {
      setDescription(condition.description);
      setImages(condition.imageURL || []);
    } else {
      setDescription("");
      setImages([]);
    }
  }, [decodedTitle]);


  return (
    <div className="pt-60 flex flex-col justify-center items-center bg-zinc-50">
      <div className="flex flex-col items-center space-y-10 mb-10 w-full justify-center">
        <div>
          <p className="text-5xl font-thin ">{decodedTitle}</p>
        </div>
        <div className="w-3/6 leading-relaxed text-center text-ellipsis">
          <p>{description}</p>
        </div>
      </div>

      <div className="flex w-full h-64 md:h-80 lg:h-96 xl:h-[40vh]">
        {images.map((image, index) => (
          <div className="relative w-1/2 h-full" key={index}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="w-full h-full object-cover"
            />
            
          </div>

        ))}
        
      </div>
      

      <div className="w-full flex justify-center h-full">
        <div className="flex justify-center w-2/3 space-x-14 text-left py-20">
          <div className="flex-1">
            <p className="text-3xl my-4">SYMPTOMS</p>
            <p>
              Fine lines are caused by the natural breakdown of collagen and
              elastin in the skin combined with ageing and other factors such as
              sun exposure, smoking, lifestyle, and genetics. Wrinkles are a
              natural part of the aging process. As people get older, their skin
              becomes thinner, drier, and less elastic, which means it is less
              able to protect itself from damage. This leads to wrinkles,
              creases, and lines on the skin.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-3xl my-4">CAUSES</p>
            <p>
              Wrinkles are a natural part of the aging process. As people get
              older, their skin becomes thinner, drier, and less elastic, which
              means it is less able to protect itself from damage. This leads to
              wrinkles, creases, and lines on the skin. Facial expressions, such
              as smiling, frowning, or squinting, lead to the development of
              fine lines and wrinkles at a young age. These lines deepen as the
              person gets older. When a person is young, their skin springs
              back. As they get older, the skin loses its flexibility, and it
              becomes more difficult for the skin to spring back, resulting in
              permanent grooves.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-3xl my-4">WHO IT CAN AFFECT</p>
            <p>
              Wrinkles are a natural part of growing older, and they affect
              everyone. However, many people dislike the appearance of wrinkles
              and there are many effective preventative treatments to help
              minimize the appearance or eradicate them altogether.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-10 w-full">
        <div className="w-full px-32">
          <div className="flex justify-center m-10">
            <p className="text-4xl pb-10">TREATMENT OPTIONS</p>
          </div>
          <div>
            <ImageSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
