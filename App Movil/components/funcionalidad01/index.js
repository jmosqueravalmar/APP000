'use strict';

app.funcionalidad01 = kendo.observable({
    onShow: function() {},
    afterShow: function() {},    
});

// START_CUSTOM_CODE_funcionalidad01

var f01 = new kendo.data.DataSource({ 
data: [
        {id: 1, nombre: "ADIDAS", rubro: "Sportware and Footware"},
        {id: 2, nombre: "HUAWUEI", rubro: "Smartphone and Tablet"}, 
        {id: 3, nombre: "ADM", rubro: "ACME ACME"},
        {id: 4, nombre: "PHILIPS", rubro: "TV-LCD and Equipos de sonido"}, 
        {id: 5, nombre: "COSAPI", rubro: "Consutoria empresarial"}, 
        {id: 6, nombre: "ASTRAZENECA PERU S.A.", rubro: "Medicamentos"},
        {id: 7, nombre: "RENA WARE DEL PERU' S.A.", rubro: "ACME ACME"}, 
        {id: 8, nombre: "NIKE", rubro: "Sportware and Footware"}, 
        {id: 9, nombre: "SONY", rubro: "TV-LCD and Equipos de sonido"},
        {id: 10, nombre: "HONDA DEL PERU' S.A.", rubro: "Auto and Motos"}, 
        {id: 11, nombre: "DAMCO S.A.", rubro: "ACME ACME"},
        {id: 12, nombre: "COCA COLA", rubro: "Drinks and Merchandaising"},
        {id: 13, nombre: "AA", rubro: "BB"},
    ]
});

var f01_contactos = new kendo.data.DataSource({
data: [
    {id: 1, clientes_id: "2", nombre: "Juan Perez", fecha_cumpleanos: "10 Marzo", telefonos: ["112 486 624", "0051 1 7538426"]},
    {id: 2, clientes_id: "2", nombre: "Carlos Alvarado", fecha_cumpleanos: "3 Marzo", telefonos: ["112 251 884"]}
    ]
});

/*USARE UNA VARIABILE TEMPORALE PER id cliente... */

function get_Contactos_Clientes(id){
    console.log("Contactos Clientes >>");
}
// END_CUSTOM_CODE_funcionalidad01