import { useReducer } from "react";
import axios from "axios";
import { GENERAL } from "@/configs";
import {
  getVehicleTypesInitialState,
  getVehicleTypesReducer,
} from "@/APIs/reducers/vehicle-types/get-vehicle-types.reducer";
import { getVehicleTypesAction } from "@/APIs/actions/vehicle-types/get-vehicle-types.action";
import {
  getInsuranceCompaniesInitialState,
  getInsuranceCompaniesReducer,
} from "@/APIs/reducers/insurance-companies/get-insurance-companies.reducer";
import { getInsuranceCompaniesAction } from "@/APIs/actions/insurance-companies/get-insurance-companies.action";

axios.defaults.baseURL = GENERAL.API_URL;

export const useAPICaller = () => {
  const [getVehicleTypesResult, getVehicleTypesDispatch] = useReducer(
    getVehicleTypesReducer,
    getVehicleTypesInitialState,
  );
  const getVehicleTypes = () => getVehicleTypesAction(getVehicleTypesDispatch);

  const [getInsuranceCompaniesResult, getInsuranceCompaniesDispatch] = useReducer(
    getInsuranceCompaniesReducer,
    getInsuranceCompaniesInitialState,
  );
  const getInsuranceCompanies = () => getInsuranceCompaniesAction(getInsuranceCompaniesDispatch);

  return {
    getVehicleTypesCaller: [getVehicleTypes, getVehicleTypesResult] as const,
    getInsuranceCompaniesCaller: [getInsuranceCompanies, getInsuranceCompaniesResult] as const,
  };
};

export default useAPICaller;
