import { action, createStore, createTypedHooks, computed } from "easy-peasy";
import { UserStoreModel } from "../types";

const store = createStore<UserStoreModel>({
  users: [],
  searchString: "",
  setSearchString: action((state, st) => {
    state.searchString = st;
  }),
  setUsers: action((state, users) => {
    state.users = users;
  }),
  toggleChecked: action((state, user) => {
    state.users = state.users.map((u) => ({
      ...u,
      checked: user.id === u.id ? !u.checked : u.checked,
    }));
  }),
});

export default store;

const typedHooks = createTypedHooks<UserStoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
