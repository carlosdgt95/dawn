let cargarDatos = () => {
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
              
              
                contador+=1
                let plantilla = `<option value="${id}">${title}</options>`

           seleccion.innerHTML+=plantilla
                
            }
            

        })
        .catch(console.error);

}
let cargarimg= () => {
    let plantilla1=''
    fetch("https://api.jikan.moe/v3/search/anime?q=animes")
        .then(response => response.json())
        .then(data => {
            let arrayImg=[]
            let contador=0
          
            let seccionimg=document.querySelector(".imagesAnimer")
            let seleccion=document.querySelector('div.input-group1 > select')
            
            let indice=seleccion.selectedIndex;
            let opcionSeleccionada=seleccion.options[indice]
            console.log("pruebaaaaaaaaaaaaaaaaaaaaaaaaaaa"+ JSON.stringify(opcionSeleccionada.text))
            
            for(let element of data['results']){
                title1=data['results'][contador]["title"]
                let imgAnime=data['results'][contador]["image_url"]
                arrayImg.push(imgAnime)
                
             
                
                contador+=1  

             console.log(JSON.stringify(title1))
         for (let datoImg in arrayImg){

            
            linkOnly = arrayImg[datoImg]
            console.log(opcionSeleccionada==title1)
            if(JSON.stringify(opcionSeleccionada.text) === JSON.stringify(title1)){
                console.log("holi")
            plantilla1=`
        
            <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="imagesAnimer1">
                        <!--cambios--->
                        <img class="img1" src="${linkOnly}">
                    </div>
                    <div class="col-auto">
                        <!--cambios--->
                    </div>
                </div>
            </div>
        </div>
    </div>
   
                       `
       
            seccionimg.innerHTML = plantilla1
            
      
             
            }
    }
           
           
         }


       
        
    })}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()

});
window.addEventListener('change', (event) => {
    
    cargarimg()
});
