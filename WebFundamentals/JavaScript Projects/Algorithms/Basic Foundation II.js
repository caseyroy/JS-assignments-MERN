1
function makeitBig(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            x[i] = "big";
        }
    }
    return x;
}
var newarr = makeitBig(x);
console.log(newarr);

2
function PrintLowRetHigh(x) {
    var min = x[0];
    var max = x[0];
    for (var i = 0; i < x.length; i++) {
        if (x[i] < min) {
            min = x[i];
        }
        else if (x[i] > max) {
            max = x[i];
        }
    }
    console.log(min);
    return max;
}
var max = PrintLowRetHigh([5, 6, 3, 24, 7, 9]);
console.log(max);

3
function PrintOneRetAnother(x) {
    var y = x.length - 2;
    console.log(x[y]);
    for (var i = 0; i < x.length; i++) {
        if (i % 2 !== 0) {
            return x[i];
        }
    }
}
var retnum = PrintOneRetAnother([1, 2, 3, 4, 5]);
console.log(retnum);


4
function Double(x) {
    var newarr = [];
    for (var i = 0; i < x.length; i++) {
        x[i] *= 2;
    }
    return newarr;
}
var newarr = Double([1, 2, 8, 5, 9]);
console.log(newarr);

5
function countPositives(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            sum += 1
        }
    }
    x[x.length - 1] = sum;
    return x;
}
var newarr = countPositives([1, 0, -5, 5, -8, 9, 10]);
console.log(newarr);

6
function evensAndOdds(x) {
    var evens = 0;
    var odds = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 !== 0) {
            odds++;
            evens = 0;
            if (odds === 3) {
                console.log("That's Odd!")
            }
        }
        else {
            evens++;
            odds = 0;
            if (evens === 3) {
                console.log("Even more so!")
            }
        }

    }

}
evensAndOdds([1, 3, 5, 6, 8, 3, 4, 8, 2, 1, 2, 3, 9, 7]);


7
function incrementOdd(x) {
    for (var i = 0; i < x.length; i++) {
        if (i % 2 !== 0) {
            x[i]++;
        }
        console.log(x[i]);

    }
    return newarr;


}
var newarr = incrementOdd([9, 1, 2, 8, 3]);


8
function previousLengths(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;

    }
    return arr;

}
var arr = previousLengths(["hello", "dojo", "awesome"]);
console.log(arr);


9
function addSeven(x) {
    var newarr = [];
    for (var i = 0; i < x.length; i++) {
        x[i] += 7;
        newarr.push(x[i])
    }
    return newarr;

}
var newarr = addSeven([6, 8, 4, 10, 7]);
console.log(newarr);

10
function reverseArray(arr) {
    var x = 0;
    var y = arr.length - 1;
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[y];
        if (x < y) {
            arr[y] = arr[x];
            arr[x] = temp;
            y--;
            x++;
        }
        else {
            break;
        }
    }
    return arr;
}
var newarr = reverseArray([3, 1, 6, 4, 2]);
console.log(newarr);


11
function outlookNegative(x) {
    var newArr = [];
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            newArr.push(x[i]);
        }
        else {
            x[i] = x[i] * -1;
            newArr.push(x[i]);
        }
    }
    return newArr;
}
var newArr = outlookNegative([1, -5, -9, 5, 7, 2, 34, -10, -6, 7, 78]);
console.log(newArr);


12
function alwaysHungry(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] === "food") {
            console.log("yummy");
            sum += 1;
        }
    }
    if (sum < 1) {
        console.log("I'm Hungry");
    }

}
alwaysHungry(["pencil", "paint", "food", "plastic", 3, "food", "hot dog water"]);



13
function toCenterSwap(arr) {
    var x = 0;
    var y = arr.length - 1;
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[y];
        if (x < y) {
            arr[y] = arr[x];
            arr[x] = temp;
            y--;
            x++;
        }
        else {
            break;
        }
    }
    return arr;
}
var newarr = toCenterSwap([1, 2, 3, 4, 5, 6]);
console.log(newarr);


14
function scaleArray(x, y) {
    for (var i = 0; i < x.length; i++) {
        x[i] *= y;
    }
    return x;
}
var newarr = scaleArray([2, 6, 3, 8, 9, 23, 14], 7);
console.log(newarr);

