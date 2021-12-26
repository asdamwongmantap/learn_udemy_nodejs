const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi, I am ' + this.name)
    }
}

const copiedPerson = {...person}
console.log(copiedPerson);

const hobbies = ['Sports','Cooking'];

//mapping
console.log(hobbies.map(hobby => 'Hobby: '+hobby))
console.log(hobbies);
// append value
hobbies.push('Programming');
console.log(hobbies);
//copy value
const copiedrray = [...hobbies];
console.log(copiedrray);

// dynamic array 
const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,4))