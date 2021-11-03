// lưu trữ trạng thái
export const AuthReducer = (state, action) => {

    const {
        type,
        payload: { isAuthenticated, user }
    } = action

    switch (type) {
        case 'SET_AUTH':
            return {
                ...state,
                AuthLoading: false,
                isAuthenticated,
                user
            }

        default:
            return state
    }

}