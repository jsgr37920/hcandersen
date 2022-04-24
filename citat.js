const time = new Date().getHours();
let greeting;
if (time < 10) {
greeting = "HVORLEDES SKULLE DET ENDELIGE KUNNE FATTE DET UENDELIGE?";
} else if (time < 20) {
greeting = "AT REJSE ER AT LEVE";
} else {
greeting = "VOR TID ER EVENTYRETS TID";
}


document.getElementById("citat").innerHTML = greeting;
