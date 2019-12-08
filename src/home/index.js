export class Hello {
  email = "ABC";
  password = "";

   activate(model) {
     this.friend = model.target;
     this.greet = false;
   }
 }