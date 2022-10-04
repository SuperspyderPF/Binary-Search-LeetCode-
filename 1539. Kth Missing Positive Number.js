/**Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.

 

Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 var findKthPositive = function(arr, k) {
    ///put arr in set 
    var ar = new Set(arr)
    ///create count array 
    var arr1 = Array.from({length: 10000}, (_, i) => i + 1)
    ///filter the array from count array
    const difference = arr1.filter( x => !ar.has(x) );
    //return solution 
    return difference[k - 1 ]
};