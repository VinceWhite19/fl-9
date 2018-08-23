const arr = [];
const zero = 0;

function getClosestToZero(arr, zero) {
    let i = 0;
    let range = Infinity;
    let result;
    for (let i = 0; i<arr.length; i++) {
        let closest = Math.abs(zero - arr[i]);
        if (closest < range) {
            range = closest;
            result = arr[i];
        }
    }
    return result;
}