
exports.min = function min (array) {
 if (array == undefined || array.length == 0) return 0


  let arr = array.sort((a,b) => (a > b) ? 1 : 0);
  return Math.min(...array)


}

exports.max = function max (array) {
    if (array == undefined || array.length == 0) return 0

  let arr = array.sort((a,b) => b - a);
  return arr[0]
  
  
  
}

exports.avg = function avg (array) {
    if (array == undefined || array.length == 0) return 0

  return (array.reduce((result,item) => item + result, 0))/(array.length)
}
