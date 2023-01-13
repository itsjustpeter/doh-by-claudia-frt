import { RoadDencityColor } from "@/constants/enum/place.enum";
import { useGetRoads } from "@/data/api/roads/useRoadApiHooks";

export const useRoadHook = (placeId: string) => {
  const { data, refetch, isLoading, isError, isRefetching } =
    useGetRoads(placeId);

  if (!data) {
    return {
      roadDataState: {
        color: "black",
        dencity: "",
        dencityDesc: "",
      },
      roadFetchState: {
        isLoading: isLoading,
        isError: isError,
        refetch: refetch,
        isRefetching: isRefetching,
      },
    };
  }

  const [dencity, dencityDesc] = [
    data.AVG_ROAD_DATA.ROAD_TRAFFIC_IDX,
    data.AVG_ROAD_DATA.ROAD_MSG,
  ];

  return {
    roadDataState: {
      color: getColorByDencity(dencity),
      dencity: dencity,
      dencityDesc: dencityDesc,
    },
    roadFetchState: {
      isLoading: isLoading,
      isError: isError,
      refetch: refetch,
      isRefetching: isRefetching,
    },
  };
};

const getColorByDencity = (dencity: string): string => {
  switch (dencity) {
    case "원활":
      return RoadDencityColor.원활;
    case "서행":
      return RoadDencityColor.서행;
    case "정체":
      return RoadDencityColor.정체;
    default:
      return RoadDencityColor.원활;
  }
};
