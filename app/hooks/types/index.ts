import { QueryFunction, QueryKey } from "@tanstack/react-query";

export interface IUseHydrate {
  queryKey: QueryKey;
  queryFn: QueryFunction;
}
