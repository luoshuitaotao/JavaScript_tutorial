function User(email,name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login =  function(){
        console.log(this.email, 'has login');
    }
}
var userOne = new User('ryu@ninjas.com','Ryu');
var userTwo = new User('yoshi@mario.com', 'Yoshi');
    
console.log(userOne);
userTwo.login();