import { GetThirdDiscountsActionTypes } from "@/APIs/types/third-discounts/action-types.enum";
import { GetThirdDiscountsAction } from "@/APIs/types/third-discounts/actions.type";
import { GetThirdDiscountsState } from "@/APIs/types/third-discounts/reducers.type";

export const getThirdDiscountsInitialState: GetThirdDiscountsState = {
  isFetching: false,
};

export const getThirdDiscountsReducer = (
  state: GetThirdDiscountsState,
  action: GetThirdDiscountsAction,
): GetThirdDiscountsState => {
  let currentState: GetThirdDiscountsState = { ...state };

  switch (action.type) {
    case GetThirdDiscountsActionTypes.REQUESTED_GET_THIRD_DISCOUNTS: {
      currentState = {
        isFetching: true,
      };
      break;
    }

    case GetThirdDiscountsActionTypes.RECIVED_GET_THIRD_DISCOUNTS: {
      currentState = {
        isFetching: false,
        statusCode: action.statusCode,
        data: action.data,
      };
      break;
    }

    case GetThirdDiscountsActionTypes.FAILED_GET_THIRD_DISCOUNTS: {
      currentState = {
        isFetching: false,
        statusCode: action.statusCode,
      };
      break;
    }
  }

  return currentState;
};
