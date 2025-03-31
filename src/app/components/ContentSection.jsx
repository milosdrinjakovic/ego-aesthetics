import Image from "next/image";

const ContentSection = ({ imageSrc, title, description, reverse }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 items-center py-5 sm:py-0 ${
        reverse ? "flex-row-reverse" : ""
      } sm:flex`}
    >
      {/* Image Section */}
      <div className="flex justify-center items-center w-full sm:w-1/2">
        <Image
          src={imageSrc}
          width={1400}
          height={1400}
          className="w-full max-h-full object-cover h-[650px] "
          alt="Content Image"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-center space-y-5 p-3 text-left sm:w-1/2 w-full  mx-auto sm:text-left px-5">
        <div className="sm:w-2/3 w-full space-y-4 ">
          <p className="text-3xl">{title.toUpperCase()}</p>
          <p className="w-full">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
