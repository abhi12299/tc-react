import { useQuery } from "@tanstack/react-query";
import { User } from "../types";
import axiosClient from "../utils/axiosClient";

export const useGetUsers = () => {
  return useQuery(["users"], () =>
    axiosClient.get<User[]>("/users.json").then((r) => r.data)
  );
};
