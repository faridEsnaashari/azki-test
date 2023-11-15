import { GetVehicleTypesActionTypes } from "@/APIs/types/vehicle-types/action-types.enum";
import { GetVehicleTypesAction } from "@/APIs/types/vehicle-types/actions.type";
import { GetVehicleTypesState } from "@/APIs/types/vehicle-types/reducers.type";

export const getVehicleTypesInitialState: GetVehicleTypesState = {
  isFetching: false,
};

export const getVehicleTypesReducer = (
  state: GetVehicleTypesState,
  action: GetVehicleTypesAction,
): GetVehicleTypesState => {
  let currentState: GetVehicleTypesState = { ...state };

  switch (action.type) {
    case GetVehicleTypesActionTypes.REQUESTED_GET_VEHICLE_TYPES: {
      currentState = {
        isFetching: true,
      };
      break;
    }

    case GetVehicleTypesActionTypes.RECIVED_GET_VEHICLE_TYPES: {
      currentState = {
        isFetching: false,
        statusCode: action.statusCode,
        data: action.data,
      };
      break;
    }

    case GetVehicleTypesActionTypes.FAILED_GET_VEHICLE_TYPES: {
      currentState = {
        isFetching: false,
        statusCode: action.statusCode,
      };
      break;
    }
  }

  return currentState;
};
