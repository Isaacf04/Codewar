

const arr = ['keep', 'remove', 'keep', 'remove'];
function removeEveryOther(arr){
  
  return arr.filter((_, index) => index % 2 === 0);
 
}


console.log(arr);

function count(string) {
const count = {};
string.split(' ').forEach(char => {
  count[char] = count[char] ? (count[char]++) : 1;
});

}