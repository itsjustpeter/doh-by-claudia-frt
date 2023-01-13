import { useGetAllPlace } from "@/data/api/place/usePlaceApiHooks";

export const usePlaceHook = () => {
  const { data } = useGetAllPlace();

  if (!data) {
    return {
      places: null,
    };
  }

  return {
    places: data,
  };
};
