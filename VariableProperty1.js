function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;    
}

var type = 'first';

var user = new User('Sam', 'Xiao');
if (type === 'first') {
	console.log(user.firstName);
} else {
	console.log(user.lastName);
}