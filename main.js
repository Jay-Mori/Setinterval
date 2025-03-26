
let SucssesQuates = [

    "Dream big, work hard." ,
"Success starts with belief." ,
"Keep going, never stop." ,
"Failure is part of success." ,
"Success is earned, not given.",
"Dream big, work hard." ,
"Success starts with belief." ,
"Keep going, never stop." ,
"Failure is part of success." ,
"Success is earned, not given."

];

let CountdownNumber = 10;
let i = 0
let number =  setInterval(()=>{

    document.getElementById('countdown').innerText =  CountdownNumber;
    

if (CountdownNumber>0){

document.getElementById('quote').innerText = SucssesQuates[i];

}

else {

    document.getElementById('quote'). innerText = "time up "; 
    clearInterval(number)
}

i++;

CountdownNumber--;

},1000 )

