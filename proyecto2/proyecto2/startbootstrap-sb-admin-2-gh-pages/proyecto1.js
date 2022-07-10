let cargarDatos = () => {
    let nombre
    let escritores
 

    fetch("https://api.jikan.moe/v3/search/anime?q=animes")
        .then(response => response.json())
        .then(data => {
            let seleccion=document.querySelector('div.input-group1 > select')
            
            
            //for(let i ;i<data.results.length;i++){
               // console.log(data.results[i].url)
                //debugger
                
            //}
            let contador=0
            for(let element of data['results']){
                let title=data['results'][contador]["title"]
                let id=data['results'][contador]["mal_id"]
                console.log(data['results'][contador]["title"])
                contador+=1
                let plantilla = `<option value="${id}">${title}</options>`

           seleccion.innerHTML+=plantilla
                
            }

        })
        .catch(console.error);

          
   
        
      ;



}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()
});