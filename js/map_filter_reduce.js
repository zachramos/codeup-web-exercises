const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

// const languagesSpoken = users.languages.filter(languages => languages.length >= 3);
// console.log(languagesSpoken);

// function hasThree (user){
//     return user.languages.length >= 3;
// }

const speaksThree = users.filter(user => user.languages.length >= 3);

console.log(speaksThree);

// function emailString(user) {
//     return user.email;
// }

const userEmails = users.map(user => user.email);

console.log(userEmails);

function getId (user){
    return user.id;
}


const userId = users.reduce((objKeys, objValues) => {

});


let newObj = users.reduce((tempObj, user) => {
     tempObj[user.id] = user;
     return tempObj;
}, {});

console.log(userId);



