for(let i = 0; i < 4; i++){
    //print each iteration to the console
    console.log(i);
}

let j = 0;

for(; ; j++){
    if(j > 3){
        break
    }
    console.log(j);
}

let arrayExample = [];

for(let i=0; i < 3;i++){
    arrayExample.push(i);
    console.log(arrayExample);
}

//declare array with 3 items
let fish = ["flounder","salmon","pike"];

//initialiaze for loop to run
for(let i=0; i < fish.length; i++){
    //print each item to the console
    console.log(fish[i]);
}