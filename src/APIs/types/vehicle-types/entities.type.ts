export type VehicleTypeApi = {
  id: number;
  title: string;
  usages: VehicleUsageApi[];
};

export type VehicleUsageApi = {
  id: number;
  title: string;
};
