function User(email,name){
    this.email = email;
    this.name = name;
    this.online = false;
}
User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has login');
}
User.prototype.logout = function(){
    this.online = true;
    console.log(this.email, 'has logout');
}

var userOne = new User('ryu@ninjas.com','Ryu');
var userTwo = new User('yoshi@mario.com', 'Yoshi');
    
console.log(userOne);
userTwo.login();