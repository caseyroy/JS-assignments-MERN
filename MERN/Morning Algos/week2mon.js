/*
Intersect Sorted Arrays (dedupe)
Efficiently combine two already sorted multiset arrays
into an array containing the sorted set intersection of the two.
Output: only the shared values between the two arrays (deduped).

Input: [1,2,2,2,7], [2,2,6,6,7]
Output: [2,7]
*/

const array1 = [1, 2, 2, 2, 7];
const array2 = [2, 2, 6, 6, 7];
const array3 = [3, 4, 4, 6, 7, 377];
const array4 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

const deDupe = (some_array, other_array) => {
    let new_array = []
    for (i = 0; i < some_array.length; i++) {
        if (other_array.includes(some_array[i]) && !new_array.includes(some_array[i])) {
            new_array.push(some_array[i])
        }
    }
    return new_array
}
console.log(deDupe(array1, array3))