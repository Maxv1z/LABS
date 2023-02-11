function createArray(n){
    let result = [];
    for (var i = 0 ; i < n; i++) {
        result[i] = [];
        for (var j = 0; j < n; j++) {
            result[i][j] = (Math.random() * 5 | 0) + 6;
        }
    }
    console.log(result);
    return result;
}
createArray(n);

var n = prompt("Enter the size of array: "), result = createArray(n);
for (let i = 0; i<n; i++){
    for (let j = 0; j<n; j++){
        console.log(result[j][i]);
    }
    console.log('\n')
}

function processColumn(column) { 
    // I need here to write a function to fo through all of elements in column but this one probably doesn't do it for elemeins in column
  let longestSequence = 0; 
  let currentSequence = 0;
  for (let i = 0; i < column.length; i++) { 
      if (column[i] >= column[i-1]) { 
        currentSequence++; } 
      else { 
        longestSequence = Math.max(longestSequence, currentSequence); 
        currentSequence = 1;
      }
    longestSequence = Math.max(longestSequence, currentSequence);
  } 
  return longestSequence;
} 

let columnValues = [], SequenceArr = [];
for (let j = 0; j < result[0].length; j++) { 
  let column = []; 
  for (let i = 0; i < result.length; i++) { 
    column.push(result[i][j]); 
  } 
  columnValues.push(processColumn(column));
} 
 
console.log(columnValues); 
