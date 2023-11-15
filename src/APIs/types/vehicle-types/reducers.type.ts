import { VehicleType } from "@/common/types/entities.type";
import { StatusCodes } from "@/tools/status-codes.tool.enum";

export type GetVehicleTypesState = {
  isFetching: boolean;
  statusCode?: StatusCodes;
  data?: VehicleType[];
};
