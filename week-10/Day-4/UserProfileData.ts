const username:string="Anil";
let age:number=23;
const email:string="anilkumar@gmail.com";
const isSubscribed:boolean=true;
//explicit types 2

const country:string="Indiaa";
let count:number=5;

age=age + 1;

const usermessage: string = `Hello ${username}, You are ${age} years old and your email is ${email}`;
const eligibilityprimium:boolean=(age)>18 && isSubscribed;

const isadult:boolean=age>=18;

console.log(usermessage);
console.log("country : ",country);
console.log("count :",count);

console.log("updated isadult :",isadult);
console.log("updated age:",age);
console.log("updated eligibilityprimium:",eligibilityprimium);
console.log("isSubscribed:",isSubscribed);




