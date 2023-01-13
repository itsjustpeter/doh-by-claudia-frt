export type BusResponse = {
  BUS_STN_ID: number;
  BUS_ARS_ID: number;
  BUS_STN_NM: string;
  BUS_STN_X: number;
  BUS_STN_Y: number;
  BUS_DETAIL: {
    BUS_DETAIL: any[];
  };
};
