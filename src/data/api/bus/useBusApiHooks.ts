import { useQuery } from "react-query";
import BusApiService from "./bus.api";

export const useGetOneBus = (placeId: string) => {
  return useQuery(["bus", placeId], () => BusApiService.getOneBus(placeId));
};
