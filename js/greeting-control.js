"use strict";

import { getRandomGreeting } from './greeting-logic.js';

window.displayGreeting = function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const greeting = getRandomGreeting();

    if (name !== '') {
        document.getElementById('greeting').innerText = `${greeting}, ${name}!`;
    } else {
        document.getElementById('greeting').innerText = 'Please enter a valid name.';
    }
};

document.getElementById('greeting-form').addEventListener('submit', displayGreeting);
