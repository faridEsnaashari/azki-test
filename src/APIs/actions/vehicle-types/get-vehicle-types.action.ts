import { GetVehicleTypesActionTypes } from "@/APIs/types/vehicle-types/action-types.enum";
import { GetVehicleTypesAction } from "@/APIs/types/vehicle-types/actions.type";
import { VehicleTypeApi } from "@/APIs/types/vehicle-types/entities.type";
import axios from "axios";
import { Dispatch } from "react";

export const getVehicleTypesAction = (dispatch: Dispatch<GetVehicleTypesAction>) => {
  dispatch({ type: GetVehicleTypesActionTypes.REQUESTED_GET_VEHICLE_TYPES });

  axios
    .get<VehicleTypeApi[]>("/vehicle/types")
    .then((response) => {
      dispatch({
        type: GetVehicleTypesActionTypes.RECIVED_GET_VEHICLE_TYPES,
        statusCode: response.status,
        data: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GetVehicleTypesActionTypes.FAILED_GET_VEHICLE_TYPES,
        statusCode: error?.response.status,
      });
    });
};
