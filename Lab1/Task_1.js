///     Task 2 in Lab 1
function createArray(n){
    let array = [];
    for (var i = 0 ; i < n; i++) {
        array[i] = [];
        for (var j = 0; j < n; j++) {
            array[i][j] = Math.floor(Math.random() * (9 - 0) + 0);
        }
     }
    for (let row of array) { 
        console.log(`${row.toString()}`) }
    return array;
  }
  let n = prompt("Enter the size of array: "), array = createArray(n);
  
  ///////////////////////////////////////////
  ///////////////////////////////////////////
 
  
  for (i=0; i<n-1; i++){
      for (j=0; j<n-i-1; j++){
       let temp = array[i][j]
       array[i][j] = array[n-j-1][n-i-1]
       array[n-j-1][n-i-1] = temp
      }
  }
  console.log('\n')
  for (let row of array) { 
        console.log(`${row.toString()}`) }
  
