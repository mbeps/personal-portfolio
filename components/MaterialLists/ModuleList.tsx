import findCourseKeyForModule from "@/actions/material/course/findCourseKeyForModule";
import Grid from "@/components/UI/Grid";
import { EDUCATION_PAGE } from "@/constants/pages";
import courseDatabase from "@/database/courses";
import moduleDatabase from "@/database/modules";
import UniversityModuleKeysEnum from "@/enums/DatabaseKeysEnums/UniversityModuleKeysEnum";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import Link from "next/link";
import Tag from "../Tags/Tag";
import HeadingTwo from "../Text/HeadingTwo";
import HeadingFour from "../Text/HeadingFour";

interface ModuleListProps {
  groupedMaterial: MaterialGroupInterface[];
  headingSize?: "HeadingTwo" | "HeadingFour"; // optional prop to determine the heading size
}

const ModuleList: React.FC<ModuleListProps> = ({
  groupedMaterial: groupedModules,
  headingSize = "HeadingTwo",
}) => {
  const basePath: string = EDUCATION_PAGE.path;

  // Function to dynamically select the heading component
  const HeadingComponent =
    headingSize === "HeadingTwo" ? HeadingTwo : HeadingFour;

  return (
    <div className="material-page-wrapper border-t border-gray-200 dark:border-neutral-600 pt-10">
      {groupedModules.map((group, index) => (
        <div key={index} className="mb-4">
          <HeadingComponent title={`University ${group.groupName}`} />
          <Grid
            gap={1}
            items={group.materialsKeys.map((moduleKey, idx) => {
              const courseKey = findCourseKeyForModule(
                moduleKey as UniversityModuleKeysEnum,
                courseDatabase
              );
              return (
                <Link href={`${basePath}/${courseKey}/${moduleKey}`} key={idx}>
                  <Tag hasHover>{moduleDatabase[moduleKey].name}</Tag>
                </Link>
              );
            })}
          />
        </div>
      ))}
    </div>
  );
};

export default ModuleList;
