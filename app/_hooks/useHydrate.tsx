import { dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "../_utils";
import { IUseHydrate } from "./types";

export const useHydrate = ({ queryKey, queryFn }: IUseHydrate) => {
  async function prefetchData() {
    try {
      const queryClient = getQueryClient();
      await queryClient.prefetchQuery({
        queryKey,
        queryFn,
      });
      return dehydrate(queryClient);
    } catch (error) {
      // TODO: handle api error here.
      console.log(error, "error");
    }
  }

  return { prefetchData };
};
