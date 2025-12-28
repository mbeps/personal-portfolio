import developerName from "@/constants/developerName";
import Link from "next/link";

/**
 * Brand mark button that anchors the navbar to the root route while reusing the global `developerName`.
 *
 * @returns Link styled as the site logo.
 */
const HomeButton: React.FC = () => {
  return (
    <div className="cursor-pointer">
      <Link href="/">
        <h2 className="text-2xl font-bold md:hover:text-red-500 md:dark:hover:text-red-800 transition-colors duration-700 ease-in-out">
          {developerName}
        </h2>
      </Link>
    </div>
  );
};

export default HomeButton;
