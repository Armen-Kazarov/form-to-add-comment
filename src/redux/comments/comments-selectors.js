export const getComments = state => state.comments.items;

export const getVisibleComments = state => {
  const allComments = getComments(state);
  return allComments;
};
