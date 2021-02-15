const name = ["Lisa", "Kaitlin", "Jan"];
const event = "surprise";
const myArray = [];
function writeCards(name, event){
    for(let i = 0; i < name.length; i++){
        myArray[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
    }
   return myArray;
}


function countDown()
{let i = 10;
while (i >= 0) {
  console.log(i--);
}
}