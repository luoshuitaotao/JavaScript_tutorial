var userOne= {
    email:'ryu@ninjas.com',
    name:'Ryu',
    login(){
        console.log(this.email,'has logged in')
    },
    logout(){
        console.log(this.email, 'has logged out')
    }
};

var userTwo= {
    email:'yoshi@ninjas.com',
    name:'Yoshi',
    login(){
        console.log(this.email,'has logged in')
    },
    logout(){
        console.log(this.email, 'has logged out')
    }
};
var userThree= {
    email:'leini@ninjas.com',
    name:'leini',
    login(){
        console.log(this.email,'has logged in')
    },
    logout(){
        console.log(this.email, 'has logged out')
    }
};
userOne.name = 'Yoshi';
            