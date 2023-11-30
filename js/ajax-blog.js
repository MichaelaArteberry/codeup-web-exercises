"use strict";

fetch('data/blog.json')
    .then(response => response.json())
    .then(data => {
        let postsDiv = document.getElementById('posts');
        let html = '';
        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            html += '<article>';
            html += '<h2>' + item.title + '</h2>';
            html += '<p>' + item.content + '</p>';
            html += '<ul>';
            for (let j = 0; j < item.categories.length; j++) {
                let category = item.categories[j];
                html += '<li>' + category + '</li>';
            }
            html += '</ul>';
            html += '<p>Date posted: ' + item.date + '</p>';
            html += '</article>';
        }
        postsDiv.innerHTML = html;
    });