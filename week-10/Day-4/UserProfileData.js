"use strict";
const username = "Anil";
let age = 23;
const email = "anilkumar@gmail.com";
const isSubscribed = true;
//explicit types 2
const country = "Indiaa";
let count = 5;
age = age + 1;
const usermessage = `Hello ${username}, You are ${age} years old and your email is ${email}`;
const eligibilityprimium = (age) > 18 && isSubscribed;
const isadult = age >= 18;
console.log(usermessage);
console.log("country : ", country);
console.log("count :", count);
console.log("updated isadult :", isadult);
console.log("updated age:", age);
console.log("updated eligibilityprimium:", eligibilityprimium);
console.log("isSubscribed:", isSubscribed);
