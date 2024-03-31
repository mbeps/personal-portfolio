import developerName from "@/constants/developerName";
import Link from "next/link";

/**
 * Home button component.
 * It displays the logo and links to the home page.
 *
 * @returns Home button component
 */
const HomeButton: React.FC = () => {
  return (
    <div className="cursor-pointer">
      <Link href="/">
        <h2
          className="
            text-2xl font-bold
            md:hover:text-red-500 md:dark:hover:text-red-800
            transition-colors duration-700 ease-in-out
          "
        >
          {developerName}
        </h2>
      </Link>
    </div>
  );
};

export default HomeButton;
