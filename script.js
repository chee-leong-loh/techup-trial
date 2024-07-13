var age = 20
age = 65

var username = "chee-leong"
var password = "techup"

var isMale = false
var isLoggedIn = false

var blog_posts = ["UrChee loves hisZach", "MyZach loves hisChee", 
    "ZaChee loves each other"]

console.log(username);
console.log(password);
console.log(isMale);
console.log(isLoggedIn);
console.log(blog_posts);

if (isMale == true) {
    console.log("You are male")
} else {
    console.log("You are female")
}

while (age < 70) {
    console.log("Your age is " + age );
    age = age + 1;
}

function sayHello() {
    alert("Chee says hello to everyone! :)");
}

function showAge() {
    // Get the value from the input field of ID #user-input
    // Store this value in a variable called user_input
    var user_input = document.getElementById("user-input").value

    // Update the content for the HTML element with ID #header-age with 
    // whatever the user_input varible contains
    document.getElementById("header-age").textContent = user_input
}
