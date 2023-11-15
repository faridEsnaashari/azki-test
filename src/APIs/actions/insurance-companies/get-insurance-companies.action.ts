import { GetInsuranceCompaniesActionTypes } from "@/APIs/types/insurance-companies/action-types.enum";
import { GetInsuranceCompaniesAction } from "@/APIs/types/insurance-companies/actions.type";
import { InsuranceCompanyApi } from "@/APIs/types/insurance-companies/entities.type";
import axios from "axios";
import { Dispatch } from "react";

export const getInsuranceCompaniesAction = (dispatch: Dispatch<GetInsuranceCompaniesAction>) => {
  dispatch({ type: GetInsuranceCompaniesActionTypes.REQUESTED_GET_INSURANCE_COMPANIES });

  axios
    .get<InsuranceCompanyApi[]>("/third/companies")
    .then((response) => {
      dispatch({
        type: GetInsuranceCompaniesActionTypes.RECIVED_GET_INSURANCE_COMPANIES,
        statusCode: response.status,
        data: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GetInsuranceCompaniesActionTypes.FAILED_GET_INSURANCE_COMPANIES,
        statusCode: error?.response.status,
      });
    });
};
