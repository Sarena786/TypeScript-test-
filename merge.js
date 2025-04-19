var ToMerge = function (collection_1, collection_2, collection_3) {
    var i = 0;
    var j = 0;
    var k = collection_3.length - 1;
    var result = [];
    while (i < collection_1.length || j < collection_2.length || k >= 0) {
        if (i < collection_1.length && (j >= collection_2.length || collection_1[i] < collection_2[j])) { //Check for collection_1 first
            if (k < 0 || collection_1[i] < collection_3[k]) {
                result.push(collection_1[i]);
                i++;
            }
            else {
                result.push(collection_3[k]);
                k--;
            }
        }
        else if (j < collection_2.length && (k < 0 || collection_2[j] < collection_3[k])) { // Second condition, what if j-th in collection_2 is less than i-th in collection_1,
            result.push(collection_2[j]); // we need to check in collection_3 as well
            j++;
        }
        else if (k >= 0) {
            result.push(collection_3[k]);
            k--;
        }
    }
    return result;
};
var result = ToMerge([1, 4], [2, 5], [6, 3]);
console.log(result);
