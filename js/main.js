
/*~~~~~~~~~~~~~~ CHRONO ~~~~~~~~~~~~~~~*/

var compte = 0;

function chrono()
{
  document.getElementById("chrono").innerHTML = compte + " secondes sur Nintendotech";
  compte++;
}

function start()
{
  setInterval(chrono, 1000);

}

window.onload = start();

/*~~~~~~~~~~~~~~ END CHRONO ~~~~~~~~~~~~~~~*/



/*~~~~~~~~~~~~~~ CLICK H1 ~~~~~~~~~~~~~~~*/

    var montitre = document.getElementById('title');


montitre.addEventListener('click', function() {
alert("Et de un !");
});


montitre.addEventListener('click', function() {
alert("Et de deux !");
});



/*~~~~~~~~~~~~~~ END CLICK H1 ~~~~~~~~~~~~~~~*/




/*~~~~~~~~~~~~~~ MOUSEOVER IMG ~~~~~~~~~~~~~~~*/
var altimage = document.getElementById("imgarticle1").getAttribute("alt");
var image = document.getElementById("imgarticle1");

image.addEventListener("mouseover", function(){
  document.getElementById('textoverimg1').innerHTML = altimage;
});

image.addEventListener("mouseout", function(){
  document.getElementById('textoverimg1').innerHTML = '';
});


/*~~~~~~~~~~~~~~ END MOUSEOVER IMG ~~~~~~~~~~~~~~~*/
