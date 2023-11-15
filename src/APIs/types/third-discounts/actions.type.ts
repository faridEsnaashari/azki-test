import { StatusCodes } from "@/tools/status-codes.tool.enum";
import { ThirdDiscountApi } from "./entities.type";
import { GetThirdDiscountsActionTypes } from "./action-types.enum";

export type GetThirdDiscountsAction = {
  statusCode?: StatusCodes;
  type: GetThirdDiscountsActionTypes;
  data?: ThirdDiscountApi[];
};
