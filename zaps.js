const zapatos_url = "https://sofii26.github.io/api-alternativo/zapatos.json";

function cargarDatos(url) {
    document.getElementById("zaps").innerHTML = "";
    fetch(url)
        .then(respuesta => respuesta.json())

        .then(datos => {
        
for (let i=0; i<datos.length; i++) {
             
                listado= `
        
                <p style ="color: red; font-weight: bold">` + "Nombre: " + datos[i].nombre +`</p>
                <p>`+ "Precio: " + datos[i].precio +`</p>
                <p>`+ "Descripción: " + datos[i].descripcion+`</p>
                <p>` + "Id: " + datos[i].id +` </p>
                <p>` + "Colores: " + datos[i].colores[i] + `</p>
                <p> ` + "Stock: " + datos[i].stock +` </p>                
         
             `;
                document.getElementById("zaps").innerHTML += listado;

        };
     })
        .catch(error => alert("Hubo un error: " + error));
}
document.addEventListener("DOMContentLoaded", function (e) {
    cargarDatos(zapatos_url);
})
