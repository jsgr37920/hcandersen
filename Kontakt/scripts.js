function validate(){
  let name = document.getElementById("name").value;
  let name2 = document.getElementById("name2").value;
  let subject = document.getElementById("name2").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let email2 = document.getElementById("email2").value;
  let message = document.getElementById("message").value;
  let error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  let text;
  if(name.length < 2){
    text = "Tilføj dit fornavn";
    error_message.innerHTML = text;
    return false;
  }
  if(name2.length < 2){
    text = "Tilføj dit efternavn";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Tilføj din email";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 8){
    text = "Tilføj dit telefonnummer";
    error_message.innerHTML = text;
    return false;
  }
  if(email2.indexOf("@") == -1 || email2.length < 6){
    text = "Tilføj vedkommendes email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 10){
    text = "Beskeden skal være mindst 10 tegn";
    error_message.innerHTML = text;
    return false;
  }
  alert("Beskeden er sendt!");
  return true;
}
