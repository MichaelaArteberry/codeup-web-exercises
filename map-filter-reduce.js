"use strict";
(() => {
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];
    const multiLangUsers = users.filter(user => user.languages.length >= 3);

    const emails = users.map(user => user.email);

    const totalXP = users.reduce((total, user) => total + user.yearsOfExperience, 0);

    const averageXP = totalXP / users.length;

    const longestEmail = users.reduce((maxEmail, user) => {
        if (user.email.length > maxEmail.length) {
            return user.email;
        } else {
            return maxEmail;
        }
    }, "");

    const nameString = users.reduce((names, user) => {
        return names + user.name;
    }, "Your instructors are: ");

})();