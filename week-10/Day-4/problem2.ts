function getWelcomeMessage(name: string): string {
  return `Welcome ${name}`;
}

function getUserInfo(name: string, age?: number): string {
  return age ? `${name} is ${age} years old` : `${name} age not provided`;
}

function getSubscriptionStatus(name: string, isSubscribed: boolean = false): string {
  return isSubscribed ? `${name} is subscribed` : `${name} is not subscribed`;
}

function isEligibleForPremium(age: number): boolean {
  return age > 18;
}

const greetUser = (name: string): string => `Hello ${name}`;

const notificationService = {
  appName: "My App",
  showMessage: (): string => `Welcome to My App`
};

console.log(getWelcomeMessage("Jahnavi"));
console.log(getUserInfo("Jahnavi", 22));
console.log(getSubscriptionStatus("Jahnavi"));
console.log(isEligibleForPremium(22));
console.log(greetUser("Jahnavi"));
console.log(notificationService.showMessage());