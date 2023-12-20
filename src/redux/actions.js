export const playPause = dispatch => (dispatch({ type: "playPause" }));
export const restartGame = dispatch => (dispatch({ type: "restart" }));

export const pointScored = (dispatch, player) => (
    dispatch({
        type: "pointScored",
        payload: { player: player },
    })
);
