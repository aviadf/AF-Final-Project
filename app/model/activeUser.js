// Service that manges the active user
hcApp.factory("activeUser", function(User){
    var user = null;

    var isLoggedIn = function() {
        return user ? true : false;
    };

    var isHouseComunityMember = function(user) {
alert(JSON.stringify(user));
        if (user.houseComunityMember === "yes") {
            return true;
        } else {
            return false;
        }
    };


    var login = function(loggedInUser) {
        user = loggedInUser;
    };

    var logout = function() {
        user = null;
    };

    var get = function() {
        return user;
    };

    return {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        get: get,
        isHouseComunityMember: isHouseComunityMember        
    };   
});