import RoleKeyEnum from "@/enums/DatabaseKeysEnums/RoleKeyEnum";

//TODO: Add documentation
export default interface CompanyInterface {
  name: string;
  website?: string;
  location: string;
  positions: RoleKeyEnum[];
  logo?: string;
}
