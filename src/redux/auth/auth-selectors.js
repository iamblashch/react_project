export const isUserLogin = ({auth}) => auth.isLogin;
export const getAuth = ({auth}) => {
    const {isLogin, token, erorr} = auth;
    return {isLogin, token, erorr};
}
export const getUser = ({ auth }) => auth.user;