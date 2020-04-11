var events = require('events');
var eventEmitter = new events.EventEmitter();
 
// Dinleyici 1
var dinleyici1 = () => {
    console.log('dinleyici 1');
};
 
// Dinleyici 2
var dinleyici2 = () => {
    console.log('dinleyici 2');
};
 
// Dinleyicilere ba�lan�yorum
eventEmitter.addListener('connection', dinleyici1);
eventEmitter.addListener('connection', dinleyici2);
 
var olayDinleyicileri1 = require('events').EventEmitter.listenerCount
                        (eventEmitter, 'connection');
console.log(olayDinleyicileri1 + ' dinleyiciye de ba�lan�ld�');
 
// Dinleyici1'i ��kar�yorum
eventEmitter.removeListener('connection', dinleyici1);
console.log('dinleyici1 ��kar�ld�...');
 
var olayDinleyicileri2 = require('events').EventEmitter.listenerCount
                        (eventEmitter, 'connection');
console.log('Geriye ' + olayDinleyicileri2 + "'i kald�...");
 
eventEmitter.emit('connection');
console.log('Program Sona �rnek...');