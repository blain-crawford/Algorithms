// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0 || strs === null) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

// Vertical Method \\

let longestCommonPrefix = function(strs){
//  create prefix and set to empty string
  let prefix = "";
//  check length of strings and if equal to zero return prefix
  if(strs.length === 0 || strs === null){
    return prefix;
  }
//  loop through first work in strs
  for(let i = 0; i < strs[0].length; i++){
//    set character equal to strs[0][i]
    let letter = strs[0][i];
//      loop through rest of strs and check letters against character
    for(let j = 0; j < strs.length; j++){
//      if strs[j][i] doesn't equal character return prefix
      if(strs[j][i] !== letter){
        return prefix;
      }
//    set prefix = prefix + character
      prefix = prefix + letter;
    }
  }
//  return prefix
  return prefix;
};
