let arr = [2,3,5,6,10];


let size = Math.max(...arr)


for(let i=1; i<=size; i++){
    if(!arr.includes(i)) console.log(i);
}