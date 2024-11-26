export default {
    createUserSession(token, userSession) {
        document.cookie = "token=" + token + "; path=/;";
        document.cookie = "userSession="+JSON.stringify(userSession)+"; path=/;";
        sessionStorage.setItem('userSession', JSON.stringify(userSession));
    },
    getToken() {
        const token = document.cookie.split('; ').find(row => row.startsWith('token='));
        return token ? token.split('=')[1] : null;
    },
    getUser() {
        return JSON.parse(sessionStorage.getItem('userSession'));
    },
    isAuthenticated()
    {
        return this.getToken() != null ? true : false;
    },
    logout() {
        console.log("actual");
        console.log(document.cookie);
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "userSession=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        console.log("logout");
        console.log(document.cookie);
        // this.$router.push('/login');
    }
}