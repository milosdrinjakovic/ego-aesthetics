import Image from 'next/image';

const ContentSection = ({ imageSrc, title, description, reverse }) => {
    return (
        <div className={`flex flex-row items-center  ${reverse ? 'flex-row-reverse' : ''}`}>
  <div className="w-1/2 flex flex-col justify-center items-center">
    <div className=" flex flex-col items-center w-1/2 text-center space-y-5 text-ellipsis p-3">
      <p className="text-3xl">{title.toUpperCase()}</p>
      <p className="">{description}</p>
    </div>
  </div>
  <div className="w-1/2 flex justify-center items-center">
    <Image
      src={imageSrc}
      width={800}
      height={600}
      className="w-full max-h-full object-cover h-[650px]" // Smanjena maksimalna visina
      alt="Content Image"
    />
  </div>
</div>
    );
  };

export default ContentSection;