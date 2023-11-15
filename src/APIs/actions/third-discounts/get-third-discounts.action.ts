import { GetThirdDiscountsActionTypes } from "@/APIs/types/third-discounts/action-types.enum";
import { GetThirdDiscountsAction } from "@/APIs/types/third-discounts/actions.type";
import { ThirdDiscountApi } from "@/APIs/types/third-discounts/entities.type";
import axios from "axios";
import { Dispatch } from "react";

export const getThirdDiscountsAction = (dispatch: Dispatch<GetThirdDiscountsAction>) => {
  dispatch({ type: GetThirdDiscountsActionTypes.REQUESTED_GET_THIRD_DISCOUNTS });

  axios
    .get<ThirdDiscountApi[]>("/third/third-discounts")
    .then((response) => {
      dispatch({
        type: GetThirdDiscountsActionTypes.RECIVED_GET_THIRD_DISCOUNTS,
        statusCode: response.status,
        data: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GetThirdDiscountsActionTypes.FAILED_GET_THIRD_DISCOUNTS,
        statusCode: error?.response.status,
      });
    });
};
