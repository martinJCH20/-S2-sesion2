//Using while and Do ... while loops

//Set population limit of aquarium to 10
const popLimit = 10;

//start of with 0 fish
let fish = 0;

while(fish-popLimit){
    //execute code as long condition is true
    //add one fish for each itersation
    fish++
    console.log(`There's room for ${popLimit-fish} more fish.`);   
}

const iceCapsAreMelting = true;
let polarBears = 5;

while(iceCapsAreMelting){
    //Execute code forever
    console.log(`There are ${polarBears} polar bears`);  
    polarBears--;
    if(polarBears === 0){
        console.log("there are no polar bears left");
        break;//finaliza al complir esta condición, sino caerá en blucle infinito
    }
}

let x = 0;

do{
    //increment variable by 1
    x++;
    console.log(x);
}while(false);
