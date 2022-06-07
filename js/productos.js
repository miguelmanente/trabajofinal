
//Array de objetos con los productos que se pueden seleccionar a través de la página de compra.html
const productos = [
    {id: 1, nombre: 'Gabinete tipo Micro-ATX', precio: 6200, imagen: 'GMicro.jpg'},
    {id: 2, nombre: 'Gabinete tipo Mini-ATX', precio: 6500, imagen: 'GMini.jpg'},
    {id: 3, nombre: 'Gabinete Tipo Escritorio', precio: 8000, imagen: 'GTE.jpg'},
    {id: 4, nombre: 'Gabinete  Tipo ATX', precio: 8500, imagen: 'Gabinete.jpeg'},
    {id: 5, nombre: 'Gabinete tipo Gamer ATX', precio: 15000, imagen: 'Ggamer.jpg'},
    {id: 6, nombre: 'Procesador Intel i3', precio: 25610, imagen: 'Pintel_i3.jpg'},
    {id: 7, nombre: 'Procesador Intel i5', precio: 29245, imagen: 'Pintel5.jpg'},
    {id: 8, nombre: 'Procesador Intel i7', precio: 39500, imagen: 'Pintel7.jpg'},
    {id: 9, nombre: 'Procesador Intel i9', precio: 50000, imagen: 'Pintel9.jpg'},
    {id: 10, nombre: 'Procesador AMD', precio: 41600, imagen: 'Pasus.jpg'},
    {id: 11, nombre: 'Motherboard Intel', precio: 36500, imagen: 'PMintel.jpg'},
    {id: 12, nombre: 'Motherboard Asus', precio: 38000, imagen: 'PMasus.jpg'},
    {id: 13, nombre: 'Motherboard GigaByte', precio: 15000, imagen: 'PMgigabyte.jpg'},
    {id: 14, nombre: 'Motherboard Asrock', precio: 23400, imagen: 'PMasrock.jpg'},
    {id: 15, nombre: 'Motherboard MSI', precio: 39349, imagen: 'PMmsi.jpg'},
    {id: 16, nombre: 'RAM kingston Fury 8Gb', precio: 7000, imagen: 'MKfury.jpg'},
    {id: 17, nombre: 'RAM Crucial 8Gb', precio: 10000, imagen: 'Mcrucial.jpg'},
    {id: 18, nombre: 'RAM Corsair 8Gb', precio: 7200, imagen: 'Mcorsair.jpg'},
    {id: 19, nombre: 'RAM PNY XLR8 8Gb', precio: 7600, imagen: 'Mpny.jpg'},
    {id: 20, nombre: 'RAM G.SKILL 8Gb', precio: 9400, imagen: 'Mgskill.jpg'},
];

//Funcion que guarda en localstorage en formato JSON los productos que se pueden seleccionar
function guardarProductosLS(productos){
    localStorage.setItem("productos",JSON.stringify(productos));
}


function cargarProductosLS(productos){
    return JSON.parse(localStorage.getItem("productos"));
}