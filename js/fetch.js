"use strict";
(() =>{
    // Function to pull the last commit
    function getLastCommit (username) {
        return new Promise ((resolve, reject) => {
            fetch (`https://api.github.com/users/${username}/events/public`)
                .then (response => response.json ())
                .then (data => {
                    const lastCommit = data.find(event => event.type === 'PushEvent');
                    lastCommit ? resolve(new Date(lastCommit.createdAt)) : reject('No commit found');
                })
                .catch (error => reject(error));
        });
    }
    // Calling on the function and add username of selected user for the last commit
    getLastCommit ('MichaelaArteberry')
        .then (date => console.log(date))
        .catch (err => console.log(err));
})();

