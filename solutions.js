function mergeSort(arr) {
    // base case 
    if (arr.length ===1 ) {
        return arr
    }
    //recursive 
    //split the array into two halves 
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)
    // call the recursive function 
   return merge(mergeSort(left), mergeSort(right))
  }
  
  
  // HELPER FUNCTION: merge two sorted arrays
  function merge(arr1, arr2) {
    var result = [];
  
    while (arr1.length && arr2.length) {
        // organize and sort the element 
      if(arr1[0] <= arr2[0]) {
        result.push(arr1.shift());
      } else {
        result.push(arr2.shift());
      }
    }
  
    return result.concat(arr1, arr2);
  }
  


function quickSort(arr){
    //base case 
    if (arr.length <= 1) {
        return arr
    } 

    //recursive call
    let pivot= arr[arr.length -1]
    let left = []
    let right = []
    for (let i = 0; i< arr.length -1; i++) {
       if (arr[i] < pivot) {
        left.push(arr[i])
       } else {
        right.push(arr[i])
       }
    }
    // return quickSort(left).concat(pivot,quickSort(right))
    return quickSort(left).concat(pivot).concat(quickSort(right))
  }

 console.log(quickSort([1,7,5,4]))


 