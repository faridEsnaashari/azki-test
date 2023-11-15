import { StatusCodes } from "@/tools/status-codes.tool.enum";
import { GetVehicleTypesActionTypes } from "./action-types.enum";
import { VehicleTypeApi } from "./entities.type";

export type GetVehicleTypesAction = {
  statusCode?: StatusCodes;
  type: GetVehicleTypesActionTypes;
  data?: VehicleTypeApi[];
};
