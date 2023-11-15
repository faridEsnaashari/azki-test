import { InsuranceCompany } from "@/common/types/entities.type";
import { StatusCodes } from "@/tools/status-codes.tool.enum";

export type GetInsuranceCompaniesState = {
  isFetching: boolean;
  statusCode?: StatusCodes;
  data?: InsuranceCompany[];
};
