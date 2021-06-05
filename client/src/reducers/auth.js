const initialState = {
    auth: null,
};

const auth = (state = initialState, { type, payload }) => {
    switch (type) {
        case "test":
            return { ...state, ...payload };

        default:
            return state;
    }
};
export default auth;
