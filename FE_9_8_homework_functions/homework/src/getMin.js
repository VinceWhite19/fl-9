function getMin(...arr) {
    let result = arr[0];
    for (let i = 0; i <= arr.length; i++) {

        if(arr[i] < result){
            result = arr[i];
        }
        
    }
    return result;
}