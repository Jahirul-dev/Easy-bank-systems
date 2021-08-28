
var btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    const logArea = document.getElementById('login-area');
    const anoArea = document.getElementById('another-area')
    logArea.style.display = 'none'
    anoArea.style.display = 'block'
    // anoArea.style.display = 'flex'
})
//for diposit   
var addDiposit = document.getElementById('addDeposit');
addDiposit.addEventListener("click",function(){
    // console.log("touched");
    let dipositAmount = document.getElementById("dipositAmmount").value;
    let dipositNumber = parseFloat(dipositAmount);
    // console.log(dipositNumber+8);
    let add = document.getElementById('add').innerHTML;
    // console.log(add);
    let addOver = parseFloat(add);
    let total = addOver+dipositNumber;
    document.getElementById('add').innerHTML = total
    console.log(addOver+dipositNumber);
})
//for balance
var addammount