
 function validar(){
     var txtedad=document.getElementById("edad").value;
     var txtnombre=document.getElementById("nombre").value;
     var txtpregunta1 = document.getElementById("pregunta1").value;
     var txtcomida =document.getElementById("comida").value;
     var txtcerveza=document.getElementById ("cerveza").value;

if((txtedad).length ==0 || (txtnombre).length==0 || (txtpregunta1).length==0 || (txtcomida).length==0 || (txtcerveza).length==0 ){
    alert("Opss olvidaste llenar un campo!");
    
    return false;
    } else{
        return true;
    }
 }

 function limpiar(){
    var txtedad=document.getElementById("edad");
    var txtnombre=document.getElementById("nombre");
    var txtpregunta1 = document.getElementById("pregunta1");
    var txtcomida =document.getElementById("comida");
    var txtcerveza=document.getElementById ("cerveza");

    txtedad.value="";
    txtnombre.value="";
    txtpregunta1.value="";
    txtcomida.value="";
    txtcerveza.value="";
 }

 function procesar(){
    var edad = document.getElementById("edad").value;
    var nombre=document.getElementById("nombre").value;
    var pregunta1 = document.getElementById("pregunta1").value;
    var comida =document.getElementById("comida").value;
    var cerveza=document.getElementById ("cerveza").value;
    var pregunta5=document.getElementsByName("pregunta5");
    var pregunta6 = document.getElementsByName("pregunta6");
    var pregunta7 = document.getElementsByName("pregunta7");
    var pregunta8 = document.getElementsByName("pregunta8");

     if (validar()==true){
        for ( i=0;i < pregunta7.length;i++){
            if(pregunta7[i].checked){
                var res7=pregunta7[i].value;
                
            }
            }
        
            for ( i=0;i < pregunta5.length;i++){
                if(pregunta5[i].checked){
                    var res5=pregunta5[i].value;
                  
                }
                }
        
                for ( i=0;i < pregunta6.length;i++){
                    if(pregunta6[i].checked){
                        var res6=pregunta6[i].value;
                       
                    }
                    }
        
                    for ( i=0;i < pregunta8.length;i++){
                        if(pregunta8[i].checked){
                            var res8=pregunta8[i].value;
                            
                        }
                        }
        
        
            
            var respuesta=document.getElementById("respuesta");
           
            respuesta.innerHTML="<p> "+nombre+"  este es tu resultado: </p><br>" + "<h3>RESULTADO</h>" + "  Eres 100% Mazatleco <br>" +"<img src='img/photo (1).jpg' class='imgRes'>" ;
           
        
            console.log("Este es el resultado" );
     }

    
  
   

 }