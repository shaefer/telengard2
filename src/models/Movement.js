export const CanMove = (dispatch, moveFunc, moveAllowedFunc, pos, config) => {
    if (moveAllowedFunc(pos, config)) dispatch(moveFunc(pos));
};
