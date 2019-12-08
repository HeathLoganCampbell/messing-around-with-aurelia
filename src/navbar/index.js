export class Navbar {

   openDrawerMenu(){
      var x = document.getElementById("mainNavBar");
      if (x.className === "navBar"){
         x.className += " responsive";
      } else {
         x.className = "navBar";
      }
   }
}