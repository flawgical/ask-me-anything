const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: String
});

module.exports = mongoose.model('Question', questionSchema);



//commenting the fruits model out cause creating a schema up above
// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'banana',
//         color: 'yellow',
//         readyToEat: true
//     }
// ];

// module.exports = fruits
