import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";

export default interface MaterialInterface {
  name: string;
  skills: SkillKeysEnum[];
  category: string;
  archived?: boolean;
}
