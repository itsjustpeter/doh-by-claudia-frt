import { axiosClient } from "@/constants/client/client";
import { PlaceResponse } from "./place.dto";

class PlaceApiService {
  private static instance: PlaceApiService;
  static get Instance(): PlaceApiService {
    return this.instance || (this.instance = new this());
  }

  async getAllPlace(): Promise<PlaceResponse[]> {
    const response = await axiosClient.get(`/area`);

    return response.data.data;
  }
}

export default PlaceApiService.Instance;
