/*
bubble sort

https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
https://visualgo.net/en/sorting
    Time Complexity
        - Best: O(n) when array is already sorted
        - Average: O(n^2) quadratic
        - Worst: O(n^2) quadratic when the array is reverse sorted
    Space: O(1) constant

    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indicies, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/
function toCenterSwap(arr) {
    var x = 0;
    var y = 1;
    for (var x = 0; x < arr.length && y < arr.length; x++) {
        var temp = arr[y];
        if (arr[x] < arr[y]) {
            arr[y] = arr[x];
            arr[x] = temp;
            y++;
            x++;
        }
    }
    return arr;
}
var newarr = toCenterSwap([4, 6, 3, 5, 7, 8]);
console.log(newarr);

// Found this online if you want to compare it to what you have

function bubble(arr) {
    var len = arr.length;
  
    for (var i = 0; i < len ; i++) {
      for(var j = 0 ; j < len - i - 1; j++){ 
      if (arr[j] > arr[j + 1]) {
        // swap
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
      }
     }
    }
    return arr;
  }

document.write(bubble([1,9,2,3,7,6,4,5,5]));


/*
selection sort

    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list. Then, ignoring the first position, which is now sorted, iterate through the list again to find the next minimum value and move it to index 1. This continues until all values are sorted.
    Time Complexity
        - Best: O(n^2)
        - Average: O(n^2)
        - Worst: O(n^2)
    Space: O(1) constant
    Selection sort is one of the slower sorts.
    - ideal for: pagination, where page 1 displays 10 records for example, you run selection sort for 10 iterations only to display the first 10 sorted items
*/