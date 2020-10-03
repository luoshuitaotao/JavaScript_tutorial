class User {
    constructor(email, name){
        this.email = email;
        this.name= name;
    }
    login(){
        console.log(this.email, 'just logged in');
    } 
    logout(){
        console.log(this.name, 'just logged out')
    }
}
var userOne = new User('ryu@ninjas.com','Ryu');
var userTwo = new User('yoshi@mario.com', 'Yoshi');

userOne.login();
userTwo.logout();