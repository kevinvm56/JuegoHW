window.addEventListener('load',function(event){
alert("BIENVENIDO AL MEJOR SITIO");
}); 

 function procesar(){
    var edad = document.getElementById("edad").value;
    var nombre=document.getElementById("nombre").value;
   
    var respuesta=document.getElementById("respuesta");

    respuesta.innerHTML="<p class='respuesta'>soy un texto nuevo</p>";

 }