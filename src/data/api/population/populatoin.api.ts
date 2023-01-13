import { axiosClient } from "@/constants/client/client";
import { PopulationResponse } from "./population.dto";

class PopulationApiService {
  private static instance: PopulationApiService;
  static get Instance(): PopulationApiService {
    return this.instance || (this.instance = new this());
  }

  async getOnePopulation(placeId: string): Promise<PopulationResponse> {
    const response = await axiosClient.get(`/population/place/${placeId}`);

    return response.data;
  }
}

export default PopulationApiService.Instance;
