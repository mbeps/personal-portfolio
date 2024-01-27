import SkillInterface from "../skills/SkillInterface";

export default interface MaterialInterface {
  name: string;
  slug: string;
  skills: SkillInterface[];
  category: string;
  archived?: boolean;
}
