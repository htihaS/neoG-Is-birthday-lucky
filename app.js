var dob =document.querySelector(".dob");
var luckynumber =document.querySelector(".lucky-number");
var check = document.querySelector(".checkyourluck");
var output =document.querySelector(".output");

var dobstring = dob.value;
var newdob = dobstring.replaceAll("-","");


check.addEventListener("click",()=>{
    var dobstring = dob.value;
    var newdob = dobstring.replaceAll("-","");
    var  sum =0;
    for(var i=0;i<8;i++){
        sum += Number(newdob.charAt(i));
    }
    if(sum%luckynumber.value===0){
        output.innerText = "You are lucky brooo"
    }else{
        output.innerText = "You suck!"
    }
})
