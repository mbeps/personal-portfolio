import Link from "next/link";
import { DEVELOPER } from "@/config/developer-info";
import { ROUTES } from "@/config/routes";

/**
 * Brand mark button that anchors the navbar to the root route while reusing the global `developerName`.
 *
 * @returns Link styled as the site logo.
 */
const HomeButton: React.FC = () => {
  return (
    <div className="cursor-pointer">
      <Link href={ROUTES.HOME.path}>
        <h2 className="font-bold text-2xl transition-colors duration-700 ease-in-out md:hover:text-red-500 md:dark:hover:text-red-800">
          {DEVELOPER.NAME}
        </h2>
      </Link>
    </div>
  );
};

export default HomeButton;
