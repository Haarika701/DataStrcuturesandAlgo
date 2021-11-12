// Text- book bubble sort algo in Javascript

function bubbleSort(inArray){
  
  let len = inArray.length;
  for(var i = 0 ; i < len ; i++){
      for(let j = 0; j< len ; j++){
          if(inArray[j] > inArray[j+1]){
              var temp = inArray[j];
              inArray[j] = inArray[j+1];
              inArray[j+1] = temp;
              
          }
      }
  }  
    return inArray;
}
bubbleSort([5,3,1,4,6]);
