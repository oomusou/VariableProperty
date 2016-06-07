function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;    
}

var type = 'first';

var user = new User('Sam', 'Xiao');
propName = (type === 'first') ? 'firstName' : 'lastName';

console.log(user[propName]);