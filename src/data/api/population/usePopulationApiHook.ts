import { useQuery } from "react-query";
import PopulationApiService from "./populatoin.api";

export const useGetOnePopulation = (placeId: string) => {
  return useQuery(
    ["population", placeId],
    () => PopulationApiService.getOnePopulation(placeId),
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
};
