
function removeEveryOther(arr){
  return arr.filter((_, index) => index % 2 === 0);
}


let arr = ['keep', 'remove', 'keep', 'remove'];

console.log(arr);