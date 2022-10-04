import { useQuery } from "@tanstack/react-query";
import { useStoreActions } from "../stores/userStore";
import { User } from "../types";
import axiosClient from "../utils/axiosClient";

const sortUsers = (data: User[]) =>
  data.sort((u1, u2) => u1.last_name.localeCompare(u2.last_name));

export const useGetUsers = () => {
  const setUsers = useStoreActions((actions) => actions.setUsers);

  return useQuery(
    ["users"],
    () => axiosClient.get<User[]>("/users.json").then((r) => r.data),
    {
      select: sortUsers,
      cacheTime: Infinity,
      staleTime: Infinity,
      onSuccess(data) {
        setUsers(
          data.map((d) => ({
            ...d,
            checked: false,
          }))
        );
      },
    }
  );
};
