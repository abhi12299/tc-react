import { Action } from "easy-peasy";

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string | null;
};

export type ExtendedUser = User & {
  checked: boolean;
};

export type UserStoreModel = {
  users: ExtendedUser[];
  toggleChecked: Action<UserStoreModel, ExtendedUser>;
  setUsers: Action<UserStoreModel, ExtendedUser[]>;
  searchString: string;
  setSearchString: Action<UserStoreModel, string>;
};
