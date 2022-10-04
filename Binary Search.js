var values = Array.from({length: 11}, (_, i) => i + 0)
function binary(val, arr){
    let lower = 0
    let upper = arr.length - 1
    while(lower <= upper){
        const middle = lower + Math.floor((upper - lower)/2)
        if(val === arr[middle]){
            return middle
        }
        if(val < arr[middle]){
            upper = middle - 1
        } else {
            lower = middle + 1 
        }
    }
    return -1
}
alert(binary(7, values))