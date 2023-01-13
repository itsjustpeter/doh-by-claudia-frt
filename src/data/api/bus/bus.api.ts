import { axiosClient } from "@/constants/client/client";
import { BusResponse } from "./bus.dto";

class BusApiService {
  private static instance: BusApiService;
  static get Instance(): BusApiService {
    return this.instance || (this.instance = new this());
  }

  async getOneBus(placeId: string): Promise<BusResponse> {
    const response = await axiosClient.get(`/place/${placeId}/bus`);

    return response.data;
  }
}

export default BusApiService.Instance;
