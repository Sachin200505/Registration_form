var nam=document.getElementById("one")
var adrs=document.getElementById("four")
var dte=document.getElementById("five")
var mail=document.getElementById("six")
var phno=document.getElementById("seven")

function clic(){
    namee=nam.value 
    address=adrs.value 
    date=dte.value
    email=mail.value
    phoneNumber=phno.value
}
var inp=document.getElementById("two")
function clickkk(){
    gender="Male" 
}
var inp=document.getElementById("three")
function clickk(){
    gender="Female"  
}

const regForm=[namee,gender,address,date,email,phoneNumber];
alert(regForm[2])
