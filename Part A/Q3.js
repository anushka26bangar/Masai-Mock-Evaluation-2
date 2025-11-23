function sumAll(...num){
  let total = 0;
  for(let n of num){
    total = total + n;
  }
  console.log(total);
}

sumAll(1, 2, 3, 4) // should return 10
