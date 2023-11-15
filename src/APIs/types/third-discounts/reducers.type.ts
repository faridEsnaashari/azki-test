import { ThirdDiscount } from "@/common/types/entities.type";
import { StatusCodes } from "@/tools/status-codes.tool.enum";

export type GetThirdDiscountsState = {
  isFetching: boolean;
  statusCode?: StatusCodes;
  data?: ThirdDiscount[];
};
