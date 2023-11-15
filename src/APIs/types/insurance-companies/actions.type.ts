import { StatusCodes } from "@/tools/status-codes.tool.enum";
import { GetInsuranceCompaniesActionTypes } from "./action-types.enum";
import { InsuranceCompanyApi } from "./entities.type";

export type GetInsuranceCompaniesAction = {
  statusCode?: StatusCodes;
  type: GetInsuranceCompaniesActionTypes;
  data?: InsuranceCompanyApi[];
};
