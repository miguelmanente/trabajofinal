
/* Función que permite llenar los cuadros de listas de la página presupuesto */
function cargaListas(){
    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

var select = document.getElementById("gabinete");           //Select que permite llenar la lista de gabintes
var options = ["Micro-ATX", "Mini-ATX","Tipo Escritorio", "Tipo ATX", "Gamer ATX"];   //Arrays con los elementos tipos gabinetes 
var precioGabinete =[6200, 6500, 8000, 8500, 15000];        //Array con los precios de los gabinetes para PC
cargaListas();      //Llamar a la función para llenar con las distintas opciones las listas desplegables

var select = document.getElementById("micro");    //Select que permite llenar la lista de procesadores
var options = ["Intel i3", "Intel i5", "Intel i7", "Intel i9", "AMD"];  //Arrays con los elementos tipos de procesadores
var precioMicro = [25610, 29245, 39500, 50000, 41600];      //Array con los precios de los microprocesadores
cargaListas();      //Llamar a la función para llenar con las distintas opciones las listas desplegables

var select = document.getElementById("mother");     //Select que permite llenar la lista de motherboard
var options = ["Intel", "Asus", "GigaByte", "Asrock", "Msi"];        //Arrays con los elementos tipos de motherboard
var precioMother = [36500, 38000, 15000, 23400, 39349];     //Array con los precios de las placas madres
cargaListas();      //Llamar a la función para llenar con las distintas opciones las listas desplegables

var select = document.getElementById("ram");        //Select que permite llenar la lista de memorias RAM
var options = ["kingston Fury 8Gb", "Crucial 8Gb", "Corsair Vengeance 8Gb", "PNY XLR8 8Gb", "G.SKILL 8Gb"];        //Arrays con los elementos tipos de memorias RAm
var precioMemoria = [7000, 10000, 7200, 7600, 9400];  //Array con los precios de los módulos de memorias
cargaListas();          //Llamar a la función para llenar con las distintas opciones las listas desplegables

var totalCompra = 0;            //Variable que permite almacenar parcialmente el monto comprado por el usuario
var seleccionado = 0;
var seleccionado1 = 0;          //Variables usadas para contar las veces que el usuario cliquea en las listas deplegables
var seleccionado2 = 0;
var seleccionado3 = 0;

function selGabinetes(){            //función que permite obtener la opción de gabinete elegido por el usuario 
    mensajeAtencion();              //funcion que ejecuta al toastify
    if(document.getElementById('gabinete').value=="Micro-ATX"){
        document.getElementById('imagen').style.backgroundImage="url('Imagenes/GMicro.jpg')";
        let precio = document.getElementById("precio");
        precio.innerHTML = "Precio: $ "+precioGabinete[0];
        monto = precioGabinete[0];
    }
    if(document.getElementById('gabinete').value=="Mini-ATX"){
        document.getElementById('imagen').style.backgroundImage="url('Imagenes/GMini.jpg')"; 
        let precio = document.getElementById("precio");
        precio.innerHTML = "Precio: $ "+precioGabinete[1];  
        monto = precioGabinete[1];
    }
    if(document.getElementById('gabinete').value=="Tipo Escritorio"){
        document.getElementById('imagen').style.backgroundImage="url('Imagenes/GTE.jpg')";  
        let precio = document.getElementById("precio");
        precio.innerHTML = "Precio: $ "+precioGabinete[2]; 
        monto = precioGabinete[2];
    }  
    if(document.getElementById('gabinete').value=="Tipo ATX"){
        document.getElementById('imagen').style.backgroundImage="url('Imagenes/Gabinete.jpeg')"; 
        let precio = document.getElementById("precio");
        precio.innerHTML = "Precio: $ "+precioGabinete[3]; 
        monto  = precioGabinete[3];
    }
    if(document.getElementById('gabinete').value=="Gamer ATX"){
        document.getElementById('imagen').style.backgroundImage="url('Imagenes/Ggamer.jpg')";  
        let precio = document.getElementById("precio");
        precio.innerHTML = "Precio: $ "+precioGabinete[4]; 
        monto = precioGabinete[4];
    } 
    seleccionado++;
    if(seleccionado <=1){
        totalCompra =  totalCompra + monto;
        var costoPesos = document.getElementById("costoPesos");
        costoPesos.innerHTML = " $ "+totalCompra;
    }else{
        mensajeError();             //funcion que llama al sweetAlert
    }
}

function selMicros(){           //función que permite obtener la opción de microprocesador elegido por el usuario 
    mensajeAtencion();           //funcion que ejecuta al toastify
    if(document.getElementById('micro').value=="Intel i3"){
        document.getElementById('imagen1').style.backgroundImage="url('Imagenes/Pintel_i3.jpg')";    
        let precioM = document.getElementById("precioM");
        precioM.innerHTML = "Precio: $ "+precioMicro[0];
        monto = precioMicro[0]; 
    }
    if(document.getElementById('micro').value=="Intel i5"){
        document.getElementById('imagen1').style.backgroundImage="url('Imagenes/Pintel5.jpg')"; 
        let precioM = document.getElementById("precioM");
        precioM.innerHTML = "Precio: $ "+precioMicro[1]; 
        monto = precioMicro[1]; 
    }
    if(document.getElementById('micro').value=="Intel i7"){
        document.getElementById('imagen1').style.backgroundImage="url('Imagenes/Pintel7.jpg')";  
        let precioM = document.getElementById("precioM");
        precioM.innerHTML = "Precio: $ "+precioMicro[2];
        monto = precioMicro[2];       
    }
    if(document.getElementById('micro').value=="Intel i9"){
        document.getElementById('imagen1').style.backgroundImage="url('Imagenes/Pintel9.jpg')";
        let precioM = document.getElementById("precioM");
        precioM.innerHTML = "Precio: $ "+precioMicro[3]; 
        monto = precioMicro[3];       
    }
    if(document.getElementById('micro').value=="AMD"){
        document.getElementById('imagen1').style.backgroundImage="url('Imagenes/Pasus.jpg')";   
        let precioM = document.getElementById("precioM");
        precioM.innerHTML = "Precio: $ "+precioMicro[4];
        monto = precioMicro[4];   
    }
    seleccionado1++; 
    if(seleccionado1 <=1){
        totalCompra =  totalCompra + monto;
        var costoPesos = document.getElementById("costoPesos");
        costoPesos.innerHTML = " $ "+totalCompra;
    }else{
        mensajeError();         //funcion que llama al sweetAlert
    }
}

function selMother(){               //función que permite obtener la opción de placa madre elegida por el usuario 
    mensajeAtencion();               //funcion que ejecuta al toastify
    if(document.getElementById('mother').value=="Intel"){
        document.getElementById('imagen2').style.backgroundImage="url('Imagenes/PMintel.jpg')";   
        let precioPlaca = document.getElementById("precioPlaca");
        precioPlaca.innerHTML = "Precio: $ "+precioMother[0];
        monto = precioMother[0];         
    }
    if(document.getElementById('mother').value=="Asus"){
        document.getElementById('imagen2').style.backgroundImage="url('Imagenes/PMasus.jpg')";   
        let precioPlaca = document.getElementById("precioPlaca");
        precioPlaca.innerHTML = "Precio: $ "+precioMother[1];  
        monto = precioMother[1];       
    }
    if(document.getElementById('mother').value=="GigaByte"){
        document.getElementById('imagen2').style.backgroundImage="url('Imagenes/PMgigabyte.jpg')"; 
        let precioPlaca = document.getElementById("precioPlaca");
        precioPlaca.innerHTML = "Precio: $ "+precioMother[2]; 
        monto = precioMother[2];          
    }
    if(document.getElementById('mother').value=="Asrock"){
        document.getElementById('imagen2').style.backgroundImage="url('Imagenes/PMasrock.jpg')";  
        let precioPlaca = document.getElementById("precioPlaca");
        precioPlaca.innerHTML = "Precio: $ "+precioMother[3]; 
        monto = precioMother[3];         
    }
    if(document.getElementById('mother').value=="Msi"){
        document.getElementById('imagen2').style.backgroundImage="url('Imagenes/PMmsi.jpg')"; 
        let precioPlaca = document.getElementById("precioPlaca");
        precioPlaca.innerHTML = "Precio: $ "+precioMother[4]; 
        monto = precioMother[4];         
    }
    seleccionado2++; 
    if(seleccionado2 <=1){
        totalCompra =  totalCompra + monto;
        var costoPesos = document.getElementById("costoPesos");
        costoPesos.innerHTML = " $ "+totalCompra;
    }else{
        mensajeError();         //funcion que llama al sweetAlert
    }
}
function selRam(){              //función que permite obtener la opción de módulos de memorias elegidos por el usuario 
    if(document.getElementById('ram').value=="kingston Fury 8Gb"){
        document.getElementById('imagen3').style.backgroundImage="url('Imagenes/MKfury.jpg')";  
        let precioRam = document.getElementById("precioRam");
        precioRam.innerHTML = "Precio: $ "+precioMemoria[0];       
        monto = precioMemoria[0]; 
    }
    if(document.getElementById('ram').value=="Crucial 8Gb"){
        document.getElementById('imagen3').style.backgroundImage="url('Imagenes/Mcrucial.jpg')"; 
        let precioRam = document.getElementById("precioRam");
        precioRam.innerHTML = "Precio: $ "+precioMemoria[1];
        monto = precioMemoria[1];       
    }
    if(document.getElementById('ram').value=="Corsair Vengeance 8Gb"){
        document.getElementById('imagen3').style.backgroundImage="url('Imagenes/Mcorsair.jpg')";    
        let precioRam = document.getElementById("precioRam");
        precioRam.innerHTML = "Precio: $ "+precioMemoria[2];
        monto = precioMemoria[2];     
    }
    if(document.getElementById('ram').value=="PNY XLR8 8Gb"){
        document.getElementById('imagen3').style.backgroundImage="url('Imagenes/Mpny.jpg')"; 
        let precioRam = document.getElementById("precioRam");
        precioRam.innerHTML = "Precio: $ "+precioMemoria[3]; 
        monto = precioMemoria[3];       
    }
    if(document.getElementById('ram').value=="G.SKILL 8Gb"){
        document.getElementById('imagen3').style.backgroundImage="url('Imagenes/Mgskill.jpg')"; 
        let precioRam = document.getElementById("precioRam");
        precioRam.innerHTML = "Precio: $ "+precioMemoria[4]; 
        monto = precioMemoria[4];       
    }
    seleccionado3++; 
    if(seleccionado3 <=1){
        mensajeGenial();            //funcion que llama al sweetAlert 
        totalCompra =  totalCompra + monto;
        var costoPesos = document.getElementById("costoPesos");
        costoPesos.innerHTML = " $ "+totalCompra;
    }else if (seleccionado3 >1 && seleccionado3 <=2){
        totalCompra =  totalCompra + monto;
        var costoPesos = document.getElementById("costoPesos");
        costoPesos.innerHTML = " $ "+totalCompra;
    }else{
        Swal.fire({                     //sweetAlert que muestra error en lo seleccionado en la página
            title: '¡¡¡YA ELIGIÓ!!!',
            text: 'Has elegidos los dos módulos RAM',
            icon: 'error',
            confirmButtonText: 'Reinicie la página'
        })
    }
  
    var costoPesos = document.getElementById("costoPesos");         //Cálculo en pesos de todos los productos elegidos
    costoPesos.innerHTML = " $ "+totalCompra; 

    // var costoDolar = document.getElementById("costoDolar");         //Cálculo en dólares de todos los productos elegidos
    // costoDolar.innerHTML = " USD "+convierteADolar(totalCompra);
    convierteADolar(totalCompra);
}


function convierteADolar(totalCompra){         //Función que convierte en dólares el precio calculado en pesos
    fetch('https://v6.exchangerate-api.com/v6/2d471f4d9cf0e0a5ccba29ca/latest/USD')
    .then((respuesta) => respuesta.json())
    .then((data) => {
        var valorRealDolar = document.getElementById("valorRealDolar");
        valorRealDolar.innerHTML = `Valor USD: ${data.conversion_rates.ARS}`;      //Muestra el valor del dolar actual
        var costoDolar = document.getElementById("costoDolar");
        var salida = `${data.conversion_rates.ARS}`
        costoDolar.innerHTML = `USD:  ${parseFloat(totalCompra / salida).toFixed(2)}`;   //calcula El monto en dólares
        })   
}

function mensajeError(){        //funcion que ejecuta al sweetAlert
    Swal.fire({
        title: '¡¡¡YA ELIGIÓ!!!',
        text: 'Solamente elegir una opción',
        icon: 'error',
        confirmButtonText: 'Reinicie la página'
    })
}

function mensajeGenial(){               //funcion que ejecuta al sweetAlert
    Swal.fire({
        title: '¡¡¡GENIAL',
        text: 'Puede elegir un módulo más',
        icon: 'success',
        confirmButtonText: 'Me pulsas!!!'
    })
}

function mensajeAtencion(){             //funcion que ejecuta al toastify
    Toastify({
        text: "¡¡¡  SELECCIONE UN SOLO PRODUCTO EN LAS LISTAS DESPLEGABLES  !!!",
        duration: 3000,
        offset:{
            x:500,
            y:630,
        },
        style: {
            background: 'linear-gradient(top, #00b09b, #96c92d)'
        }
    }).showToast();
}








