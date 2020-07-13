/*
Visualization https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/

Create a function that uses yesterday’s partition to fully sort an array in-place.

Unstable Sort

Time Complexity
    - Best: O(n log(n)) linearithmic
    - Average: O(n log(n)) linearithmic
    - Worst: O(n^2) quadratic

Space: O(1) constant

Params: nums, left, right
- left and right are indexes, for now, left will be 0, and right will be the last idx
- later these params will be used to specify a sub section of the array to partition

Steps:
    - start by partitioning the full array (use the previously built partition algo)
    - then partition the left side of the array (left of the returned partition idx) and the right side (right of the returned partition idx), recursively
*/

function quickSort(array) {
    let left = [];
    let right = [];
    for (i = 1; i < array.length; i++) {
        if (array[i] < array[0]) {
            left.push(array[i]);
        }
        if (array[i] >= array[0]) {
            right.push(array[i]);
        }
    }
    console.log(left, right);
    return partition(left), partition(right);
}

quickSort(nums1);
quickSort(nums2);

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];