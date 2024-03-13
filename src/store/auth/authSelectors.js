
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const avatarURL = state => state.auth.user.avatarURL;
export const getError = state => state.auth.error;
export const setToken = state => state.auth.token;
