import { useReducer } from "react";
import axios from "axios";
import { GENERAL } from "@/configs";
import {
  getVehicleTypesInitialState,
  getVehicleTypesReducer,
} from "@/APIs/reducers/vehicle-types/get-vehicle-types.reducer";
import { getVehicleTypesAction } from "@/APIs/actions/vehicle-types/get-vehicle-types.action";

axios.defaults.baseURL = GENERAL.API_URL;

export const useAPICaller = () => {
  const [getVehicleTypesResult, getVehicleTypesDispatch] = useReducer(
    getVehicleTypesReducer,
    getVehicleTypesInitialState,
  );
  const getVehicleTypes = () => getVehicleTypesAction(getVehicleTypesDispatch);

  return {
    getVehicleTypesCaller: [getVehicleTypes, getVehicleTypesResult] as const,
  };
};

export default useAPICaller;
