const saveUser =  (uid, name, role) => {
    localStorage.setItem('uid', uid.toString());
    localStorage.setItem('name', name);
    localStorage.setItem('role', role);
}

const getUser = () => {
    const uid = localStorage.getItem('uid');
    return uid ? parseInt(uid) : null;
}

const removeUser = () => {
    localStorage.removeItem('uid');
}
const removeToken = () => {
    localStorage.removeItem('token')
}

const isUserLoggedIn = () => {
    return !!getToken();
}

const storeToken = (token) => {
    localStorage.setItem('token', token);
}

const getToken = () => {
    const token = localStorage.getItem('token')
    return token ? token : null;
}

export { saveUser, getUser, removeUser, isUserLoggedIn, storeToken, getToken, removeToken };