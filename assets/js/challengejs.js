// // less than 100

// function lessThan100(num1, num2) {
//   total = num1 + num2;

//   if (total < 100) {
//     return true;
//   } else {
//     return false;
//   }
// }

// //lessThan100(22, 15); //➞ true
// // 22 + 15 = 37

// console.log(lessThan100(83, 34)); // ➞ false
// // 83 + 34 = 117

// // lessThan100(3, 77) ➞ true

// //  add up numbers

// function addUp(num3) {
//   totalValue = 0;
//   for (i = 1; i <= num3; i++) {
//     totalValue += i;
//   }

//   return totalValue;
// }

// console.log(addUp(4)); //➞ 10

// //addUp(13) //➞ 91

// //addUp(600) //➞ 180300

// //  function add up array produce one number

// function addedTotal(numberArr) {
//   totalArray = 0;
//   for (i = 0; i < numberArr.length; i++) {
//     totalArray += numberArr[i];
//   }

//   return totalArray;
// }

// console.log(addedTotal([1, 2, 3, 4, 5]));

//

function timeForMilkAndCookies(year, month, day) {
  if (month == 11 && day == 24) {
    return true;
  } else {
    return false;
  }
}

console.log(timeForMilkAndCookies(3000, 11, 24)); //➞ true

//timeForMilkAndCookies((2013, 0, 23)) //➞ false

//timeForMilkAndCookies((3000, 11, 24)) //➞ true

// set time challenge

function timeSetter() {
  const resultTime = new Date();
  return resultTime.getMonth();
}

console.log(timeSetter());

// true or false

function countWord(array1) {
  trueCount = 0;
  for (i = 0; i < array1.length; i++) {
    if (array1[i] == true) {
      trueCount += 1;
    }
  }

  return trueCount;
}

console.log(countWord([true, true, true, false, false, true, true]));

// seven boom

function sevenBoom(nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == 7) {
      return "boom";
    } else {
      return "there is no nubmer 7";
    }
  }
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); //➞ "Boom!"

//sevenBoom([8, 6, 33, 100]) //➞ "there is no 7 in the array"
