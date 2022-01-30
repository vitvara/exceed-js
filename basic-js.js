const users = [{
        id: 1,
        name: 'A',
        age: 10
    },
    {
        id: 2,
        name: 'B',
        age: 20
    },
    {
        id: 3,
        name: 'C',
        age: 30
    },
    {
        id: 4,
        name: 'D',
        age: 40
    },
    {
        id: 5,
        name: 'E',
        age: 50
    }
];

const newArrayWithoutID = users.map((user) => {
    return { name: user.name, age: user.age }
});

console.log(newArrayWithoutID);

console.log(
    users.find((user) => user.name === 'E')
);

const newGreetingArrays = users.map((user) => {
    return {
        ...user,
        greeting() {
            console.log(`Hi my name is ${this.name}`)
        }
    }
});

for (newGreetingArray of newGreetingArrays) {
    newGreetingArray.greeting();
}
for (user of users) {
    console.log(user);
}

const callBack1 = (pram) => {
    console.log('hello1' + pram)
}

const callBack2 = (pram) => {
    console.log('hello2' + pram)
}

const callBack3 = (pram) => {
    console.log('hello3' + pram)
}

let arrs = [callBack1, callBack2, callBack3];

const myFunc = (callback) => {
    callback('called');
}

for (arr of arrs) {
    myFunc(arr);
}

















// console.log(users.map((user) => { return { name: user.name, age: user.age } }))
// console.log(users.find((user) => user.name === 'E'))
// const newArray = users.map((user) => {
//     return {...user,
//         introduce() {
//             console.log(`Hi my name is ${this.name}`)
//         }
//     }
// })