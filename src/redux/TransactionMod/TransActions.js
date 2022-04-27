import { HideModal, ShowModal } from "./TransType";

export const ShowModalForm = () => {
  return {
    type: ShowModal,
  };
};

export const HideModalForm = () => {
  return {
    type: HideModal,
  };
};
