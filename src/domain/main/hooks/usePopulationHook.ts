import { PopulationDencityColor } from "@/constants/enum/place.enum";
import { useGetOnePopulation } from "@/data/api/population/usePopulationApiHook";

export const usePopulationHook = (placeId: string) => {
  const { data, refetch, isLoading, isError, isRefetching } =
    useGetOnePopulation(placeId);

  if (!data) {
    return {
      popDataState: {
        time: "",
        color: "white",
        dencity: "",
        dencityDesc: "",
      },
      popFetchState: {
        isLoading: isLoading,
        isError: isError,
        isRefetching: isRefetching,
        refetch: refetch,
      },
    };
  }

  const [time, dencity, dencityDesc] = [
    data.LIVE_PPLTN_STTS.PPLTN_TIME,
    data.LIVE_PPLTN_STTS.AREA_CONGEST_LVL,
    data.LIVE_PPLTN_STTS.AREA_CONGEST_MSG,
  ];

  return {
    popDataState: {
      time: time,
      color: getColorByDencity(dencity),
      dencity: dencity,
      dencityDesc: dencityDesc,
    },
    popFetchState: {
      isLoading: isLoading,
      isError: isError,
      isRefetching: isRefetching,
      refetch: refetch,
    },
  };
};
const getColorByDencity = (dencity: string): string => {
  switch (dencity) {
    case "여유":
      return PopulationDencityColor.여유;
    case "보통":
      return PopulationDencityColor.보통;
    case "혼잡":
      return PopulationDencityColor.혼잡;
    case "약간 혼잡":
      return PopulationDencityColor.약간혼잡;
    case "약간 붐빔":
      return PopulationDencityColor.약간혼잡;
    default:
      return PopulationDencityColor.여유;
  }
};
