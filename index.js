const names = [ 'Lisa', 'Kaitlin', 'Jan' ];
let greetingArray = [];


function writeCards(names, event){
  
  for (let i = 0; i < names.length; i++){
    
    greetingArray[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  }
  return greetingArray;

}
console.log(writeCards(names, "birthday"));

function countDown()
{let i = 10; 
  while (i >= 0) {
  console.log(i--);
}
}
console.log(countDown());