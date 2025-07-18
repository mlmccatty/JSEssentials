let userRole = "admin";
let accessLevel;
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Partial access granted";
} else { 
    accessLevel = "Access denied.";
}
console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";

    }
} else {
    userMessage = "Please log in to access this software.";
}
console.log("User Message:",userMessage)

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);