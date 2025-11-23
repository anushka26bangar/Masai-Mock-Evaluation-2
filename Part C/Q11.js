function createWallet(){
  let balance = 0;
  function addMoney(amount){
    balance = balance + amount;
    console.log("Added Amount:",amount);
  }
  function checkBalance(){
    console.log("Current Balance:",balance);
}
return {
  addMoney:addMoney,
  checkBalance:checkBalance
}
}

let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance(); 