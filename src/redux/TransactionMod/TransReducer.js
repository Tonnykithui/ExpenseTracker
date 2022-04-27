import { HideModal, ShowModal } from "./TransType";

const init = {
  loading: false,
};

const ShowModalFormReducer = (state = init, action) => {
  switch (action.type) {
    case ShowModal:
      return {
        ...state,
        loading: true,
      };

    case HideModal:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default ShowModalFormReducer;
