const mergeSort = (array) => {
    if (array.length < 2)
        return array;

    let left   = array.slice(0, Math.floor(array.length / 2));
    let right  = array.slice(Math.floor(array.length / 2));

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
      left[0] <= right[0] ?
      result.push(left.shift()) :
      result.push(right.shift());
    }

    result.push(...left, ...right)

    return result;
}

module.exports = {mergeSort, merge};
