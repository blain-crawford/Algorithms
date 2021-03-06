// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Example 2:

// Input: s = "IV"
// Output: 4
// Example 3:

// Input: s = "IX"
// Output: 9
// Example 4:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

// For intToRoman all numbers calculated should be <= 3000

/**
 * @param {string} s
 * @return {number}
 */

var intToRoman = function(s) {
   let thousands = ["", "M", "MM","MMM"];
   let hundreds = ["", "C", "CC", "CCC","CD", "D", "DC", "DCC", "DCCC", "DM", "M"];
   let tens = ["", "X", "XX", "XXX","XL", "LX", "LXX", "LXX", "LXXX", "XC", "C"];
   let units = ["", "I", "II", "III","IV", "V", "VI", "VII", "VIII", "IX", "X"];

   return thousands[Math.floor(s/1000)] +
         hundreds[Math.floor((s % 1000) / 100)]+
         tens[Math.floor((s % 100) / 10)] +
         units[Math.floor(s % 10)];
};

console.log(intToRoman(3));

let romanToInt = function(s){
   let map = {"I": 1,
              "V": 5,
              "X": 10,
              "L": 50,
              "C": 100,
              "D": 500,
              "M": 1000,     
            }

   let counter = 0;

   for(let i = 0; i < s.length; i++){
      let currentValue = s[i];
      let nextValue = s[i + 1]
      if(map[currentValue] >= map[nextValue] || nextValue === undefined){
         counter += map[currentValue];
      } else if (map[currentValue] < map[nextValue]){
         counter -= map[currentValue];
      }
   }
   return counter;
};

console.log(romanToInt("MCDXLVII") === 1447);
//expected true

