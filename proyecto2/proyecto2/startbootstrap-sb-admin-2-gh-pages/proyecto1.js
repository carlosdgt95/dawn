
function compareNumbers(a, b) {
    return a - b;
  }
  var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return [a - b];
});
console.log(numbers);


let cargarGrafico=()=>{
    
    fetch("https://api.jikan.moe/v3/search/anime?q=animes")
    .then(response => response.json())
    .then(datas => {
    let graficas=document.querySelector(".chart-area>.graficas1")
    let titulos=[]
    let puntuacion=[]
    var puntuacionMayor=[]
    let titulosMayor=[]
    //tener datos de nombre y puntuacion
    contador=0
    for(let element of datas['results']){
        let title=datas['results'][contador]["title"]
        let score=datas['results'][contador]["score"]
        titulos.push(title)
        puntuacion.push(score)
        
        contador+=1
        console.log(puntuacion[contador])
    }
    console.log(puntuacion)
    puntuacioncopia=[]
    puntuacioncopia=puntuacion.slice().sort().reverse()
    
    console.log(puntuacioncopia)
    console.log("despues",puntuacion)
    //tener indicie
    presentarTitulo=[]
    presentarpuntuacion=[]
    for ( var i=0;i<5;i++){
        indices=puntuacion.indexOf(puntuacioncopia[i]) 
        console.log("aaaa",puntuacioncopia[i], indices)
        presentarpuntuacion.push(puntuacioncopia[i])
        presentarTitulo.push(titulos[indices])
        
    }
    console.log(presentarTitulo)
    console.log(presentarpuntuacion)
    presentarTitulocortos=[]
    cont=0
    for (let element of presentarTitulo){
        element=element.split(",")
        console.log(element)
        //element=element.split(":")
        let titulo1=element[cont].split(":")
        console.log("holll",titulo1[0])
        presentarTitulocortos.push(titulo1[0])

    }
console.log("aaaaaaaaaa",presentarTitulocortos)

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
