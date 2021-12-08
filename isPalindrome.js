// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {};

//  Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false

// Constraints:

// -231 <= x <= 231 - 1

//// Brute Force Solution \\\\
var isPalindrome = function (x) {
  let itIsPalindrome = true;
  let forwardArr = x.toString().split("");
  let backwardArr = x.toString().split("");
  backwardArr.reverse();

  for (let i = 0; i < forwardArr.length; i++) {
    if (parseInt(forwardArr[i]) === parseInt(backwardArr[i])) {
      itIsPalindrome = true;
    } else {
      itIsPalindrome = false;
      return itIsPalindrome;
      n;
    }
  }
  return itIsPalindrome;
};

//// Memory Efficient Method \\\\

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let reverse = 0;

  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    reverse = reverse * 10 + (i % 10);
  }
  return reverse === x;
};

console.log(isPalindrome(1234321));
console.log(isPalindrome(12345321));
console.log(isPalindrome(123321));
