
console.log ("javascript running");

 let toggleButton = document.getElementsByClassName('toggle-button')[0]
 let navbarLinks = document.getElementsByClassName('navbar-links')[0]

 toggleButton.addEventListener('click', () => {
   navbarLinks.classList.toggle('active')
 });

 Guides.onclick = function() {
     alert('Måske gå over til Feedback?');
   };

   // få knappen, og når brugeren klikker på den så fremfører den "myFunction"
   document.getElementById("myBtn").onclick = function() {myFunction()};

 // "myFunction" aktiveres mellem at tilføje og fjerner "show class", hvilket er med for at skjule og vise "dropdown" indholdet

   function myFunction() {
     document.getElementById("myDropdown").classList.toggle("show");
   }


   const time = new Date().getHours();
 let greeting;
 if (time < 10) {
   greeting = "Godmorgen";
 } else if (time < 20) {
   greeting = "Tid til frokost!";
 } else {
   greeting = "Godaften";
 }
 document.getElementById("Morgenmessage").innerHTML = greeting;
