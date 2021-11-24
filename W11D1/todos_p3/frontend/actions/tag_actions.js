import * as APIUtil from "../util/tag_api_util";

export const RECEIVE_TAGS = "RECEIVE_TAGS";

export const receiveTags = (tags) => {
  return {
    type: RECEIVE_TAGS,
    tags
  };
};

export const fetchTags = () => (dispatch) => {
  return (
    APIUtil
      .fetchTags()
      .then(tags => dispatch(receiveTags(tags)))
  );
};