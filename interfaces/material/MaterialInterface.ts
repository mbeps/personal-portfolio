import SkillInterface from "../skills/SkillInterface";

export default interface MaterialInterface {
  name: string;
  skills: SkillInterface[];
  category: string;
  archived?: boolean;
}
