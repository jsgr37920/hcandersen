
console.log ("Film H.C.Andersen har inspireret.");

const stories = ["Den lille havfrue", "Frozen", "Den grimme ælling", "Fantasia 2000"];
for(storie of stories) {
  console.log(storie);
}

 let toggleButton = document.getElementsByClassName('toggle-button')[0]
 let navbarLinks = document.getElementsByClassName('navbar-links')[0]

 toggleButton.addEventListener('click', () => {
   navbarLinks.classList.toggle('active')
 });

 mail.onclick = function() {
     alert('så er du tilmeldt vores nyhedsfeed');
   };

   hat.onclick = function() {
       alert(greeting);
     };
