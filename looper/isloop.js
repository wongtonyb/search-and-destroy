'use strict';

//Complete this algo

const isLoop = linkedlist => {
  let oldNodeValue = linkedlist.head.value;
  if (linkedlist.head.next === null) {
    return false;
  } else {
    linkedlist.head = linkedlist.head.next;
    console.log(linkedlist.head.previous.value, oldNodeValue);
    if (linkedlist.head.previous.value !== oldNodeValue) {
      return true;
    } else {
      return isLoop(linkedlist);
    }
  }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
