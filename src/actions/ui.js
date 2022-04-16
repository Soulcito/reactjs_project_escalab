import { types } from "../utilities";

export const startLoading = () => ({
  type: types.uiStartLoading
});

export const finishLoading = () => ({
  type: types.uiFinishLoading
});