import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Free Unlimited File Converter
        </h1>
        <p className="text-fray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          A versatile file converter application designed to handle a wide range of file formats with ease.
          ConvertMaster simplifies the process of converting files, ensuring high-quality output and user-friendly experience.
          Whether you need to convert documents, images, audio, or video files, ConvertMaster has got you covered.
        </p>
      </div>
    </div>
  );
}
