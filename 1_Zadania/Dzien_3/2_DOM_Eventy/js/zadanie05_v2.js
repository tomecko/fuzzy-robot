document.addEventListener('DOMContentLoaded', function() {

   var elementListBoxes = document.querySelectorAll('.box');
   console.dir(elementListBoxes);

   for (var i=0; i<elementListBoxes.length; i++) {
       elementListBoxes[i].addEventListener('click', function() {
           var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
           this.style.backgroundColor = randomColor;
       });
   };

});