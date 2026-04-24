"use strict";
function getWelcomeMessage(name) {
    return `Welcome ${name}`;
}
function getUserInfo(name, age) {
    return age ? `${name} is ${age} years old` : `${name} age not provided`;
}
function getSubscriptionStatus(name, isSubscribed = false) {
    return isSubscribed ? `${name} is subscribed` : `${name} is not subscribed`;
}
function isEligibleForPremium(age) {
    return age > 18;
}
const greetUser = (name) => `Hello ${name}`;
const notificationService = {
    appName: "My App",
    showMessage: () => `Welcome to My App`
};
console.log(getWelcomeMessage("Jahnavi"));
console.log(getUserInfo("Jahnavi", 22));
console.log(getSubscriptionStatus("Jahnavi"));
console.log(isEligibleForPremium(22));
console.log(greetUser("Jahnavi"));
console.log(notificationService.showMessage());
