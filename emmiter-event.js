const EventEmitter = require('events');

const myEmitter = new EventEmitter()

// Listener

myEmitter.on('birthday', () => {
console.log("Happy Birthday to you");
})

myEmitter.on('birthday', (gift) => {
    console.log(`I will send you a ${gift}`);
})

myEmitter.emit('birthday', 'bike')