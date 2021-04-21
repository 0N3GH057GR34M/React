import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
}

const user = {
    firstName: 'Vladimir',
    lastName: 'Putin',
    avatarUrl: 'https://sun9-59.userapi.com/BD0wUYRoOc1LpxSEkBZg9EsPRW9xBgNTBHHEBw/xYjjKMtyhcE.jpg',
};

function tick() {
    ReactDOM.render(
        React.createElement('div', {className: 'class'}, [
            element,
            getGreeting(user),
            <h2>It is {new Date().toLocaleTimeString()}.</h2>]),
        document.getElementById('root')
    );
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const element = React.createElement('img', {src: user.avatarUrl});

setInterval(tick, 1000);

reportWebVitals();
