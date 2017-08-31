
function mergeSort(arr) {
    if (arr.length < 2)
        return arr;

    var left   = arr.slice(0, parseInt(arr.length / 2));
    var right  = arr.slice(parseInt(arr.length / 2), arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
      left[0] <= right[0] ?
      result.push(left.shift()) :
      result.push(right.shift());
    }

    result.push(...left, ...right)

    return result;
}

module.exports = {mergeSort, merge};
