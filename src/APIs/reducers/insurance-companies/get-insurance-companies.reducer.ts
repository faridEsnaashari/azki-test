import { GetInsuranceCompaniesActionTypes } from "@/APIs/types/insurance-companies/action-types.enum";
import { GetInsuranceCompaniesAction } from "@/APIs/types/insurance-companies/actions.type";
import { GetInsuranceCompaniesState } from "@/APIs/types/insurance-companies/reducers.type";

export const getInsuranceCompaniesInitialState: GetInsuranceCompaniesState = {
  isFetching: false,
};

export const getInsuranceCompaniesReducer = (
  state: GetInsuranceCompaniesState,
  action: GetInsuranceCompaniesAction,
): GetInsuranceCompaniesState => {
  let currentState: GetInsuranceCompaniesState = { ...state };

  switch (action.type) {
    case GetInsuranceCompaniesActionTypes.REQUESTED_GET_INSURANCE_COMPANIES: {
      currentState = {
        isFetching: true,
      };
      break;
    }

    case GetInsuranceCompaniesActionTypes.RECIVED_GET_INSURANCE_COMPANIES: {
      currentState = {
        isFetching: false,
        statusCode: action.statusCode,
        data: action.data,
      };
      break;
    }

    case GetInsuranceCompaniesActionTypes.FAILED_GET_INSURANCE_COMPANIES: {
      currentState = {
        isFetching: false,
        statusCode: action.statusCode,
      };
      break;
    }
  }

  return currentState;
};
