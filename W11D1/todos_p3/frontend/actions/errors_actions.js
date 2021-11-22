export const RECEIVE_ERROR = "RECEIVE_ERROR";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveError = (error) => ({
  type: RECEIVE_ERROR,
  error
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});