import developerName from "@/constants/developerName";
import location from "@/constants/location";
import Image from "next/image";
import Socials from "@/components/socials/Socials";

const CvHeader = () => {
  return (
    <header className="flex flex-col items-center gap-8 mb-10">
      <div className="shrink-0">
        <Image
          src="/profile.png"
          alt={developerName}
          width={150}
          height={150}
          className="rounded-full border-2 border-neutral-200 dark:border-neutral-800"
          priority
        />
      </div>
      <div className="flex flex-col items-center text-center flex-grow">
        <h1 className="text-4xl font-bold mb-2">{developerName}</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-4">
          {location}
        </p>
        <div className="mb-4">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default CvHeader;
