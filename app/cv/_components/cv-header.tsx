import Image from "next/image";
import Socials from "@/components/socials/socials";
import developerName from "@/constants/developer-name";
import location from "@/constants/location";
import { PATHS } from "@/constants/paths";

const CvHeader = () => {
  return (
    <header className="mb-10 flex flex-col items-center gap-8">
      <div className="shrink-0">
        <Image
          src={PATHS.PROFILE}
          alt={developerName}
          width={150}
          height={150}
          className="rounded-full border-2 border-neutral-200 dark:border-neutral-800"
          priority
        />
      </div>
      <div className="flex flex-grow flex-col items-center text-center">
        <h1 className="mb-2 font-bold text-4xl">{developerName}</h1>
        <p className="mb-4 text-neutral-600 text-xl dark:text-neutral-400">
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
