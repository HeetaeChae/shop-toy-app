export interface User {
  id: string;
  nickname: string;
  avatar_url: string | null;
  roles: number;
  created_at: Date;
  updated_at: Date;
}

export enum RolesEnum {
  Admin = 1,
  Seller = 2,
  Member = 3,
}
