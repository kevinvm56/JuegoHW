

 function refresh(){
     location.reload(true)
 }

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
    var comida =document.getElementById("comida");
    var cerveza=document.getElementById ("cerveza");
    var pregunta5=document.getElementsByName("pregunta5");
    var pregunta6 = document.getElementsByName("pregunta6");
    var pregunta7 = document.getElementsByName("pregunta7");
    var pregunta8 = document.getElementsByName("pregunta8");
    var pregunta9 = document.getElementsByName("pregunta9");
    var pregunta10 = document.getElementsByName("pregunta10");
    var pregunta11 = document.getElementsByName("pregunta11");


     
    var pR1=0;
    var pR2=0;
    var pR3=0;
    var pR4=0;
    var pR5=0;
    var pR6=0;
    var pR7=0;
    var pR8=0;
    var pR9=0;
    var pR10=0;
    var pR11;


        
        if (comida.value=='ceviche'){
            pR1=7;
        } else if(comida.value=='aguachile'){
            pR1=10;
        } else if(comida.value=='frijoles'){
            pR1=5;
        }
     

        if(cerveza.value=='pacifico'){
            pR2=10;
        } else if (cerveza.value=='tecate'){
            pR2=2;
        } else if (cerveza.value=='miller'){
            pR2=5;
        } else if (cerveza.value=='indio'){
            pR2=1;
        }

        if (pregunta1=='bichi'){
            pR3=10;
        }else if(pregunta1=='vaqueton'){
            pr3=8;
        }else if(pregunta1=='fierro'){
            pr3=6;
        }else if(pregunta1=='plebe'){
            pR3=4;
        } 


      




     if (validar()==true){
        for ( i=0;i < pregunta7.length;i++){
            if(pregunta7[i].checked){
                var res7=pregunta7[i].value;

                if(res7=='BICHI' || res7=='bichi'){
                pR6=10
                }else if(res7=='DESNUDO' || res7=='desnudo'){
                pR5=2;
                }else if(res7=='ENCUERADO' || res7=='encuerado'){
                    pR5=5;
                }
            }
            }
        
            for ( i=0;i < pregunta5.length;i++){
                if(pregunta5[i].checked){
                    var res5=pregunta5[i].value;
                         
                    if(res5=='SI'){
                        pR4=10;
                    } else if(res5=='NO'){
                        pR4=5;
                    }
                }
                }
        
                for ( i=0;i < pregunta6.length;i++){
                    if(pregunta6[i].checked){
                        var res6=pregunta6[i].value;
                       if (res6=='SI'){
                            pR5=10;
                       }  else if(res6=='NO'){
                           pR5=5;
                       }
                    }
                    }
        
                    for ( i=0;i < pregunta8.length;i++){
                        if(pregunta8[i].checked){
                            var res8=pregunta8[i].value;
                            
                            if (res8=='R3'){
                                pR7=10;
                            } else if(res8=='R2'){
                                pR7=6;
                            } else if(res8=='R1'){
                                pR7=2;
                            }
                        }
                        }

                        for ( i=0;i < pregunta9.length;i++){
                            if(pregunta9[i].checked){
                                var res9=pregunta8[i].value;
                                
                                if (res9=='R3'){
                                    pR8=2;
                                } else if(res9=='R2'){
                                    pR8=1;
                                } else if(res9=='R1'){
                                    pR8=10;
                                }
                            }
                            }
                         

                            for ( i=0;i < pregunta10.length;i++){
                                if(pregunta10[i].checked){
                                    var res10=pregunta10[i].value;
                                    
                                    if (res10=='R3'){
                                        pR9=4;
                                    } else if(res10=='R2'){
                                        pR9=1;
                                    } else if(res10=='R1'){
                                        pR9=10;
                                    }
                                }
                                }



                                for ( i=0;i < pregunta11.length;i++){
                                    if(pregunta11[i].checked){
                                        var res11=pregunta11[i].value;
                                        console.log(res11);
                                        if (res11=='R3'){
                                            pR10=10;
                                        } else if(res11=='R2'){
                                            pR10=6;
                                        } else if(res11=='R1'){
                                            pR10=10;
                                        }
                                    }
                                    }
        
            console.log(pR1+" " +pR2+" "+pR3+" "+pR4+" "+pR5+" "+pR6+" "+pR7+" " +pR8+ " "+pR9+" "+pR10);
            var totalPuntos=pR1+pR2+pR3+pR4+pR5+pR6+pR7+pR8+pR9+pR10;
            var rutaimg="";
            if (totalPuntos>80){
                rutaimg="'img/descargar (1).jpg'";
            } else if(totalPuntos <80 && totalPuntos>50){
                rutaimg="'img/descargar.jpg'";
            } else if(totalPuntos <50 && totalPuntos >30){
                rutaimg="'img/hqdefault.jpg'";
            } else if(totalPuntos <30 && totalPuntos>10){
                rutaimg="'img/photo (1).jpg'";
            } else{
                rutaimg="'img/hqdefault (1).jpg'";
            }

            var respuesta=document.getElementById("respuesta");
             respuesta.style.backgroundColor=' rgb(1, 123, 152)';           
            respuesta.innerHTML="<p class='texto1'> "+nombre+"  este es tu resultado: </p><br>" + "<h3 class='texto2'>RESULTADO</h> <br>" + "  Eres "+ totalPuntos + "% Mazatleco <br>" +"<img src="+rutaimg+" class='imgRes'>" ;
           
        
            console.log("Este es el resultado" );
     }

    
  
   

 }