// const person = { name: 'Lydia', age: 21, }; 
// for (const item in person)
//  { console.log(item); }
//  //output name age           (0)
//================================================================
// let a = "25"
// let b = 25
// console.log(a == b);
// console.log(99 + 1 + "10");
// //output true 10010           (1)
//=============================================================
// setTimeout(function () {
//     console.log('First Line');
// }, 0);
// console.log('Second Line');
// console.log('Third Line');

// //output second line, Third line, first line   (0)
//==================================================================
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const lydia = new Person('Lydia', 'Hallie');
// const sarah = Person('Sarah', 'Smith');
// console.log(lydia.name);
// console.log(sarah.name);

// //output 
// //Person {firstName: "Lydia", lastName: "Hallie"} 
// // undefined

// //For sarah, we didn't use the new keyword. When using new, this refers to the new empty object we create. However, if you don't add new, this refers to the global object!
// //We said that this.firstName equals "Sarah" and this.lastName equals "Smith".What we actually did, is defining global.firstName = 'Sarah' and global.lastName = 'Smith'.sarah itself is left undefined, since we don't return a value from the Person function.
//========================================================



