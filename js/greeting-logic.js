"use strict";

import  getRandomNumber  from './number-utils.js';

const greetings =
    [
        "Hello",
        "Hi",
        "Hey there",
        "Greetings",
        "Salutations",
        "Howdy",
        "Yo",
        "Bonjour",
        "Hola",
        "Ciao",
        "Namaste",
        "G'day",
        "What's up",
        "Sup",
        "How's it going",
        "Nice to meet you",
        "Welcome",
        "Hey",
        "How are you",
        "Pleased to meet you"
    ];

 function getRandomGreeting() {
    const index = getRandomNumber(0, greetings.length - 1);
    return greetings[index];
}

export { getRandomGreeting };