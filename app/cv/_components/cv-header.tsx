import Image from "next/image";
import Socials from "@/components/socials/socials";
import { DEVELOPER } from "@/config/developer-info";
import { PATHS } from "@/config/paths";

const CvHeader = () => {
  return (
    <header className="mb-10 flex flex-col items-center gap-8">
      <div className="shrink-0">
        <Image
          src={PATHS.PROFILE}
          alt={DEVELOPER.NAME}
          width={150}
          height={150}
          className="rounded-full border-2 border-neutral-200 dark:border-neutral-800"
          priority
        />
      </div>
      <div className="flex flex-grow flex-col items-center text-center">
        <h1 className="mb-2 font-bold text-4xl">{DEVELOPER.NAME}</h1>
        <p className="mb-4 text-neutral-600 text-xl dark:text-neutral-400">
          {DEVELOPER.LOCATION}
        </p>
        <div className="mb-4">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default CvHeader;
