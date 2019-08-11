/** Arrays: Left Rotation
 * 
 * A left rotation operation on an array shifts each of the array's elements 1
 * unit to the left. For example, if 2 left rotations are performed on array
 * [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2] 
 */

function rotLeft(array, numRot){
 for (let i = 0; i < numRot; i++) {
   for (let j = 1; j < array.length; j++) {
    const numberRemoved = array.splice(j, 1)[0];
    array.splice(j - 1, 0, numberRemoved);
   }
 }
 return array;
}

rotLeft([1,2,3,4,5], 2) //[3,4,5,1,2]

// ============
//     V2      
// ============

//best performance
function rotLeftv2(array, numRot){
  for (let i = 0; i < numRot; i++) {
    array.push(array.shift());
  }
  return array;
}
 
rotLeftv2([1,2,3,4,5], 2) //[3,4,5,1,2]
