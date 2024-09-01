/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 60;
let student = false;
let price = 800;

if(age < 10){
    console.log("You can travel free")
}
else if(student === true){
    //50% discount
    let discount = price * 50/100;
    let payAmount = price - discount;
    console.log(payAmount)
}
else if(age >= 60){
    //15%discount
    let discount = price * 15/100;
    let payAmount = price - discount;
    console.log(payAmount)
}

else{
    console.log("You have to buy your ticket")
}