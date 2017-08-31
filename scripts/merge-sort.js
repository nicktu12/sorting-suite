const mergeSort = (array) => {
    if (array.length < 2)
        return array;

    var left   = array.slice(0, Math.floor(array.length / 2));
    var right  = array.slice(Math.floor(array.length / 2));

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
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
