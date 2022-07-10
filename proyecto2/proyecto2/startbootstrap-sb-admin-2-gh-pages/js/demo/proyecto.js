let cargarDatos = () => {
    let nombre
    let escritores
 

    fetch("https://dataserverdaw.herokuapp.com/escritores/xml")
        .then(response => response.json())
        .then(data => {

            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");

            escritores = xml.getElementsByTagName('escritor')

            for(let escritor of escritores){
                let id = escritor.getElementsByTagName('id')[0].textContent
                nombre = escritor.getElementsByTagName('nombre')[0].textContent

                let plantilla = `<option value="${id}">${nombre}</options>`

                document.querySelector('div.input-group1> select').innerHTML += plantilla
            }

        })
        .catch(console.error);

          
   
        
      ;



}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()
});