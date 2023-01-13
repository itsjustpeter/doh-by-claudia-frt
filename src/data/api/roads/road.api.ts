import { axiosClient } from "@/constants/client/client";
import { RoadResponse } from "./roads.dto";

class RoadApiService {
  private static instance: RoadApiService;
  static get Instance(): RoadApiService {
    return this.instance || (this.instance = new this());
  }

  async getRoads(placeId: string): Promise<RoadResponse> {
    const response = await axiosClient.get(`/place/${placeId}/roads`);

    return response.data;
  }
}

export default RoadApiService.Instance;
