function arrayDiff(a, b) {
    let difference = a.filter(x => !b.includes(x))
    return difference
  }


  
/* 
  
array1 = ["a","b"]
array2 = ["a","b","c","d"]

returns ["c", "d"]
*/