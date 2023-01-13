import { useQuery } from "react-query";
import PlaceApiService from "./place.api";

export const useGetAllPlace = () => {
  return useQuery(["bus"], () => PlaceApiService.getAllPlace());
};
