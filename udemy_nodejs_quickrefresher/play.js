//summarize User part
const name = 'Asdam';
let age = 29;
let hasHobbies =  true;

age = 30;

// constant with arrow function
const summarizeUser = (userName,userAge, userHasHobby) => {
    return (
        'Name is' +
        userName +
        ' , age is' +
        userAge +
        ', and the user has hobbies: ' +
        userHasHobby
    );
}

// arrow function without function
// with 2 argument
// const add = (a,b) => a + b;
// with 1 argument
// const addOne = a => a + 1;
// without argument
const addRandom = () => 1 + 2;

console.log(addRandom());

console.log(summarizeUser(name,age,hasHobbies));