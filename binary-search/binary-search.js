'use strict';

// Complete this algo
// ----- first approach (for loop)
// const binarySearch = (array, target) => {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element === target) return true;
//   }
//   return false;
// };
// ----- second approach (recursion)
// const binarySearch = (array, target) => {
//   if (array.length === 0) {
//     return false;
//   } else if (array[0] === target) {
//     return true;
//   } else {
//     array.shift();
//     return binarySearch(array, target);
//   }
// };
//----- third approach (O(log(n)) time complexity)
const binarySearch = (array, target) => {
  if (array.length === 0) {
    return false;
  } else if (array.length === 1) {
    if (array[0] === target) {
      return true;
    } else {
      return false;
    }
  } else {
    let middleIndex = Math.floor(array.length / 2);
    let middleValue = array[middleIndex];
    if (middleValue === target) {
      return true;
    } else if (middleValue < target) {
      array = array.slice(middleIndex);
      return binarySearch(array, target);
    } else if (middleValue > target) {
      array = array.slice(0, middleIndex);
      return binarySearch(array, target);
    }
  }
};
// ---- fourht approach with compare helper function (not working)
// const compare = (a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// };

// const binarySearch = (array, target) => {
//   if (array.length === 0) {
//     return false;
//   } else {
//     let middleIndex = Math.floor(array.length / 2);
//     let middleValue = array[middleIndex];
//     let result = compare(middleValue, target);
//     if (result === 0) {
//       return true;
//     } else if (result === -1) {
//       array = array.slice(middleIndex);
//       return binarySearch(array, target);
//     } else if (result === 1) {
//       array = array.slice(0, middleIndex);
//       return binarySearch(array, target);
//     } else {
//       return false;
//     }
//   }
// };
/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
