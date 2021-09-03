const zapatos_url = "https://sofii26.github.io/api-alternativo/zapatos.json";
var Buscar;
function cargarDatos(url) {
    document.getElementById("zaps").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())

        .then(datos => {
   let listado= "";     
for (let i=0; i<datos.length; i++) {
     let zapatos_img= "";
    if (datos[i].id == "1"){
zapatos_img = '<img height="300" src="botas.jpg" alt="">';
  }
 if (datos[i].id == "2") {
zapatos_img ='<img height="300" src="championes.jpg" alt="">';
    }
    if (datos[i].id == "3") {
        zapatos_img ='<img height="300" src="botines.jpg" alt="">';
    }
    if (datos[i].id == "4")
    {
zapatos_img = '<img height="300" src="pantuflas.jpg" alt="">';
}
if (Buscar == undefined || datos.nombre.toLowerCase().includes(Buscar)) { 
                listado= `
        <div id="list">
        <div id="list_text">
                <br><p style ="color: maroon; font-weight: bold; font-size: 35px"> `+ datos[i].nombre +`</p>
                <p>`+ "Precio: " + datos[i].precio +`</p>
                <p>` + datos[i].descripcion+`</p>
                <p>` + "Id: " + datos[i].id +` </p>
                <p> ` + "Stock: " + datos[i].stock +` </p>  
                <p> ` + zapatos_img +  ` </p>     
                </div>       
         </div>
             `;
                document.getElementById("zaps").innerHTML += listado;

        };
     }})
        .catch(error => alert("Hubo un error: " + error));
}
document.addEventListener("DOMContentLoaded", function (e) {
    cargarDatos(zapatos_url);
})

document.getElementById("buscar").addEventListener("input", function() {
    Buscar = document.getElementById("buscar").value.toLowerCase(); 
    cargarDatos(zapatos_url);
})
