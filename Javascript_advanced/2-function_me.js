function welcomeMessage(){
    return function() {
        alert("Welcome " + fullName);
    };
}

var guillaume = welcomeMessage("Guillaume");
var alex = welcomeMessage("Alex");
var fred = welcomeMessage("Fred");

// Example usage:
guillaume();
alex();
fred();
