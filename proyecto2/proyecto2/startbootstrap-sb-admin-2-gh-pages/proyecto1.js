


let cargarGrafico=()=>{
    
    fetch("https://api.jikan.moe/v3/search/anime?q=animes")
    .then(response => response.json())
    .then(datas => {
    let seccionimg5=document.querySelector(".imagenAni")
    let graficas=document.querySelector(".chart-area>.graficas1")
    let titulos=[]
    let puntuacion=[]
 
    let urls=[]
    //tener datos de nombre y puntuacion
    contador=0
    for(let element of datas['results']){
        let title=datas['results'][contador]["title"]
        let score=datas['results'][contador]["score"]
        let url=datas['results'][contador]["image_url"]
        titulos.push(title)
        puntuacion.push(score)
        urls.push(url)  
        contador+=1
        //console.log(puntuacion[contador])
    }
    //console.log(puntuacion)
    puntuacioncopia=[]
    puntuacioncopia=puntuacion.slice().sort().reverse()
    
    //console.log(puntuacioncopia)
    //console.log("despues",puntuacion)
    //tener indicie
    presentarTitulo=[]
    presentarpuntuacion=[]
    presentarimagenes=[]
    for ( var i=0;i<5;i++){
        indices=puntuacion.indexOf(puntuacioncopia[i]) 
        console.log("aaaa",puntuacioncopia[i], indices)
        presentarpuntuacion.push(puntuacioncopia[i])
        presentarTitulo.push(titulos[indices])
        presentarimagenes.push(urls[indices])
    }
    
   
        
    ////diseño
    


    
    console.log(presentarimagenes)
    //console.log(presentarpuntuacion)
    presentarTitulocortos=[]
    cont=0
    for (let element of presentarTitulo){
        element=element.split(",")
        //console.log(element)
        //element=element.split(":")
        let titulo1=element[cont].split(":")
        //console.log("holll",titulo1[0])
        presentarTitulocortos.push(titulo1[0])

    }
    seccionimg5.innerHTML=`  <div class="imagenAni">

    <!-- Project Card Example -->
    <div class="containerImg5">
        <div class="card-header py-3">
            
            <div class="imagenAni">
                <div class="card bg-primary text-white shadow">
                    <div class="card-body">
                    ${presentarTitulocortos[0]}
                        <div class="text-white-50 small"></div>
                        <img src=${presentarimagenes[0]}" width=190px>
                    </div>
                </div>
            </div>
            <div class="imagenAni">
                <div class="card bg-success text-white shadow">
                    <div class="card-body">
                    ${presentarTitulocortos[1]}
                        <div class="text-white-50 small"></div>
                        <img src=${presentarimagenes[1]} width=190px>
                    </div>
                </div>
            </div>
            <div class="imagenAni">
                <div class="card bg-info text-white shadow">
                    <div class="card-body">
                    ${presentarTitulocortos[2]}
                        <div class="text-white-50 small"></div>
                        <img src=${presentarimagenes[2]} width=180px>
                    </div>
                </div>
            </div>
            <div class="imagenAni">
                <div class="card bg-warning text-white shadow">
                    <div class="card-body">
                    ${presentarTitulocortos[3]}
                        <div class="text-white-50 small"></div>
                        <img src=${presentarimagenes[3]} width=190px>
                    </div>
                </div>
            </div>
            <div class="imagenAni">
                <div class="card bg-danger text-white shadow">
                    <div class="card-body">
                    ${presentarTitulocortos[4]}
                        <div class="text-white-50 small"></div>
                        <img src=${presentarimagenes[4]} width=190px>
                    </div>
                </div>
            </div>
            
        </div>

        </div>
        
    </div>`

//console.log("aaaaaaaaaa",presentarTitulocortos)

    new Chart(graficas, {
        type: 'bar',
        data: {
          labels: presentarTitulocortos,
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: presentarpuntuacion
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Top 5 de animes'
          }
        }
    });
})
   

 


   
  

}

    
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
    let plantilla2=''
    let plantilla3=''
        fetch("https://api.jikan.moe/v3/search/anime?q=animes")
        .then(response => response.json())
        .then(data => {
            let arrayImg=[]
            let contador=0
            let tituloseleccionado=document.querySelector(".tituloGeneral")
            let tit=document.querySelectorAll("h1")
            let seccionimg=document.querySelector(".imagesAnimer")
            let seleccion=document.querySelector('div.input-group1 > select')
            let synopsis=document.querySelector(".descripcion")
            
            let indice=seleccion.selectedIndex;
            let opcionSeleccionada=seleccion.options[indice]
            //console.log("pruebaaaaaaaaaaaaaaaaaaaaaaaaaaa"+ JSON.stringify(opcionSeleccionada.text))
            
                        
            //////////////////////////////
            
            for(let element of data['results']){
                title1=data['results'][contador]["title"]
                let imgAnime=data['results'][contador]["image_url"]
                arrayImg.push(imgAnime)
                
                let descripcion=data['results'][contador]["synopsis"]
                //console.log(title1)
                contador+=1  
                
               
                           

             //console.log(JSON.stringify(title1))
         for (let datoImg in arrayImg){

            
            linkOnly = arrayImg[datoImg]
            //console.log(opcionSeleccionada==title1)
            if(JSON.stringify(opcionSeleccionada.text) === JSON.stringify(title1)){
                //console.log("holi")
                plantilla3=`     
                <div class="tituloGeneral">
                <h1 >${title1}</h1>
                
            </div>

        
                `
                //
                tituloseleccionado.innerHTML=plantilla3
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
            
      
               
            plantilla2=`
        
            <div class="descripcion">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                           <!--cambios-->
                           <p class="descripcionAnime">${descripcion}</p>
                        </div>
                        <div class="col-auto">
                           <!--cambios-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
                       `
        synopsis.innerHTML=plantilla2
             
            }
    }
           
           
         }


       
        
    })}


window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()
    cargarGrafico()
  

});
window.addEventListener('change', (event) => {
    
    cargarimg()
});
