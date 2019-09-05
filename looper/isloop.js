'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let arr = [];
    let val = linkedlist.head.value;
    if (arr.includes(val)) {
        return true;
    } else {
        arr.push(val);
    }
    if (linkedlist.head.next === null) {
        return false;
    } else {
        console.log('before', linkedlist)
        linkedlist.head = linkedlist.head.next;
        console.log('after', linkedlist)
        return isLoop(linkedlist);
    }
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop