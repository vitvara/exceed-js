const users = [{
        id: 1,
        name: "A",
        age: 10,
    },
    {
        id: 2,
        name: "B",
        age: 20,
    },
    {
        id: 3,
        name: "C",
        age: 30,
    },
    {
        id: 4,
        name: "D",
        age: 40,
    },
    {
        id: 5,
        name: "E",
        age: 50,
    },
];

const getUserById = async(id) => {
    return new Promise((resolve, reject) => {
        console.log("starting operation...");
        console.log("Finding user ...");
        setTimeout(() => {
            const user = users.find((user) => user.id === id);
            console.log("Operation ended");

            if (user) {
                resolve(user);
            } else {
                reject("User not Found.");
            }
        }, 1500);
    });
};
(async() => {
    try {
        const user = await getUserById(8);
        console.log(user);
    } catch (error) {
        console.log(error);
    }
})();

console.log('hi')