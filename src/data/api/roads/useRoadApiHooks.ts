import { useQuery } from "react-query";
import RoadApiService from "./road.api";

export const useGetRoads = (placeId: string) => {
  return useQuery(["road", placeId], () => RoadApiService.getRoads(placeId), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
