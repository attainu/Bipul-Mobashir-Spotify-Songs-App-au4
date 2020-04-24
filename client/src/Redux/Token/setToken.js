let setToken = (token, name) => {
    localStorage.setItem('auth-token', token);
    localStorage.setItem('name', name);
    
}
export default setToken;