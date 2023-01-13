import { useState } from "react";
import { MapType } from "../type/place.type";
import { usePopulationHook } from "../hooks/usePopulationHook";
import { usePlaceHook } from "../hooks/usePlaceHook";
import { PlaceResponse } from "@/data/api/place/place.dto";
import { useRoadHook } from "../hooks/useRoadHook";

export const useMainView = () => {
  // item
  const [place, setPlace] = useState<PlaceResponse | null>();
  const [placeName, setPlaceName] = useState<string | null>();

  // map
  const [mapPosition, setMapPosition] = useState<MapType>({
    longtitude: 0,
    latitude: 0,
  });

  // hooks
  const { places } = usePlaceHook();
  const { popDataState, popFetchState } = usePopulationHook(place?.AREA_NM!!);
  const { roadDataState, roadFetchState } = useRoadHook(place?.AREA_NM!!);

  //functions
  const handleMapPositionChange = (long: number, lat: number) => {
    setMapPosition({ longtitude: long, latitude: lat });
  };

  const handleItemChange = (place: PlaceResponse) => {
    setPlace(place);
    setPlaceName(place.AREA_NM);
    handleMapPositionChange(place.LAT, place.LNG);
  };

  const handleItemReset = () => {
    setPlaceName(null);
  };

  const handlePlaceRefresh = () => {
    popFetchState.refetch();
    roadFetchState.refetch();
  };

  return {
    placeList: places,
    placeState: {
      list: places,
      currPlace: place,
      name: placeName,
      onItemChange: handleItemChange,
      onItemReset: handleItemReset,
    },
    pageState: {
      refresh: handlePlaceRefresh,
    },
    mapState: {
      longtitude: mapPosition.longtitude,
      latitude: mapPosition.latitude,
    },
    populationState: {
      dataState: popDataState,
      fetchState: popFetchState,
    },
    roadState: {
      dataState: roadDataState,
      fetchState: roadFetchState,
    },
  };
};
