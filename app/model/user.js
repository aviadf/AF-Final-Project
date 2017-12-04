// Shared User Constructor
hcApp.factory("User", function(){
    function User(plainObject) {
        this.email = plainObject.email;
        this.password = plainObject.password;
        this.firstName = plainObject.firstName;
        this.lastName = plainObject.lastName;
        this.houseComunityMember = plainObject.houseComunityMember;
    };

    return User;
});