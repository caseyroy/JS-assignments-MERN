// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
You can assume there is always a valid solution

These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order

Hard Bonus: make it O(n) time
*/

const { testDriver } = require("../../helpers");

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
const expected3 = [1, 2, 3];
/* 
Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

const testCases = [
    { arguments: [nums1, k1], expected: expected1 },
    { arguments: [nums2, k2], expected: expected2 },
    { arguments: [nums3, k3], expected: expected3 },
];
testDriver([kMostFrequent], testCases);

function kMostFrequent(nums, k) { }

// https://leetcode.com/problems/two-sum/
// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Bonus: Make it O(n) time
*/
const { testDriver } = require("../../helpers");

const nums1 = [2, 7, 11, 15];
const targetSum1 = 9;
const expected1 = [0, 1];
// Explanation: nums[0] + nums[1] = 2 + 7 = 9

const testCases = [{ arguments: [nums1, targetSum1], expected: expected1 }];
testDriver([sumTwo, sumTwoSpaceOptimized], testCases);

function sumTwo(nums, targetSum) { }