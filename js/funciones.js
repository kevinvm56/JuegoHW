window.addEventListener('load',function(event){
alert("BIENVENIDO AL MEJOR SITIO");
}); 

 function procesar(){
    var edad = document.getElementById("edad").value;
    var nombre=document.getElementById("nombre").value;
   
    var respuesta=document.getElementById("respuesta");
     var p;
    respuesta.innerHTML="<p class='respuesta'>soy un texto nuevo</p>";
     var resp = document.getElementById("id_resp").value;
     if(resp =="bichi || Bichi || BICHI")
         {
             p=p+10;
         }
     else if(resp =="jalo || Jalo || JALO")
         {
             p=p+15;
         }
     else if(resp =="fierro || Fierro || Fierro")
         {
             p=p+25;
         }
     else if(resp =="Chingado || chingado || CHINGADO")
         {
             p=p+15;
         }
     else if(resp =="Pistear || pistear || PISTEAR")
         {
             p=p+40;
         }
     else if(resp =="jalate a la banda || Jalate a la banda || JALATE A LA BANDA")
         {
             p=p+55;
         }
     else if(resp =="placasonas || Placasonas || PLACASONAS")
         {
             p=p+30;
         }
     else if(resp =="sacala para que apeste || Sacala para que apeste || SACALA PARA QUE APESTE")
         {
             p=p+40;
         }

 }