function counter(){
  let count = 0;
  function inner(){
    count = ++count;
    return count
  }
  return inner;
}
const c = counter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());
