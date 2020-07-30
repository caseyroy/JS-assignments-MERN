/* 
Given two strings S and T containing only lowercase letters and "#" characters,
return if they are equal when both are typed into empty text editors.
# character means a backspace character.
i.e., after processing the backspaces, are the two strings equal?
Bonus: solve in O(n) time
*/

const { testDriver } = require("../../helpers");

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

const testCases = [
    { arguments: [S1, T1], expected: expected1 },
    { arguments: [S2, T2], expected: expected2 },
    { arguments: [S3, T3], expected: expected3 },
    { arguments: [S4, T4], expected: expected4 },
];
testDriver([backspaceCompare], testCases);

function backspaceCompare(S, T) { }

/* 
Given a string, containing letters, single digit ints, and question marks
return whether or not there are exactly 3 question marks between EVERY two ints that add up to 10
    - if there are no two ints that add up to 10, return false
Helpful functions:
    parseInt(char) => NaN or the string parsed to an int
    isNaN(x) => true or false
    - need to use isNaN if you want to know if something is NaN
    - the number 0 is falsy
    - NaN is falsy
*/

const { testDriver } = require("../../helpers");

const str1 = "aa6?9";
const expected1 = false;

const str2 = "acc?7??sss?3rr1??????5";
const expected2 = true;

const str3 = "?3?d?dad?7??????3";
const expected3 = true;

const str4 = "7??????3";
const expected4 = false;
// Explanation: too many question marks

const testCases = [
    { arguments: [str1], expected: expected1 },
    { arguments: [str2], expected: expected2 },
    { arguments: [str3], expected: expected3 },
    { arguments: [str4], expected: expected4 },
];
testDriver([questionMarks], testCases);

function questionMarks(str) { }
© 2020 GitHub, Inc.