import type RoleInterface from "@/database/roles/role-interface";

/**
 * Serialized version of RoleInterface with formatted date strings for client components.
 */
export type SerializedRole = Omit<RoleInterface, "startDate" | "endDate"> & {
  startDate: string;
  endDate: string;
};

export type SerializedRoleInterface = SerializedRole;
