
exports.min = function min (array) {
  
  if (typeof array != "undefined" && array != null && array.length != null && array.length > 0){ 
    
   let minNumber = Math.min.apply(null, array);
   return minNumber; 
        
      }  
        return 0;
  }
     
 
exports.max = function max (array) {

  
  if (typeof array != "undefined" && array != null && array.length != null && array.length > 0){ 
    
    let maxNumber = Math.max.apply(null, array);
    return maxNumber; 
         
       }  
         return 0;
   }
  


exports.avg = function avg (array) {
  if (typeof array != "undefined" && array != null && array.length != null && array.length > 0){
    let avgSum = array.reduce((a,b) => a+b);
      return avgSum / array.length;
  }

  return 0;

  
}


