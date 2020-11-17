import Anuncio,{a} from './class.js'
import {autos} from './data.js'
const spinner = document.getElementById("spinner");
window.addEventListener("load",inicioParametros);

function inicioParametros(){
    
    spinner.setAttribute("hidden", "");
    document.getElementById("btnGuadar").addEventListener("click",activarSpinner);
   /* let ruedaSpinner =document.getElementById("spinner");
    */
    console.log(a);    
}
function activarSpinner(){
 //  
    spinner.removeAttribute("hidden");
    window.setTimeout(function() {
        activarTiempoDeEspera(1);
      },1000);  
}
function activarTiempoDeEspera(a){
    
    spinner.setAttribute("hidden", "");
    const anuncio = new Anuncio("2","hola","transaccion","descr","23");
    console.log(anuncio._id);
    console.log(a);
}


console.log(autos);
const btnTabla = document.getElementById('btnGuadar');
btnTabla.addEventListener('click',function(){
    event.preventDefault();
    
    const divTabla = document.getElementById('divTabla');
 divTabla.appendChild(crearTabla(autos));
 

});
function crearTabla(lista){   
    const tabla = document.createElement('table');
    tabla.appendChild(crearCabecera(lista[0]));
    tabla.appendChild(crearCuerpo(lista));
    return tabla;
}
function crearCabecera(item){
//retorna un thead
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    for(const key in item){
        const th = document.createElement('th');
        const texto = document.createTextNode(key);
        th.appendChild(texto);
       // th.textContent=key
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    return thead;
}

function crearCuerpo(lista){
//retorna untbody
    const tbody = document.createElement('tbody');
    lista.forEach(element => {
        const tr = document.createElement('tr');
       
        for(const key in element){
            const td = document.createElement('td');
            
            const texto = document.createTextNode(element[key]);
            td.appendChild(texto);
            
            tr.appendChild(td);
            agregarManejadorTd(td);
        }
        console.log(element.hasOwnProperty('id'));
        if(element.hasOwnProperty('id')){
            tr.setAttribute('data-id',element['id']);
        }
        agregarManejadorTr(tr);
        tbody.appendChild(tr);
        
    });
    return tbody;
}

function agregarManejadorTd(td){

    if(td){
        td.addEventListener('click',function(e){
           
           console.log(e.target.parentNode.dataset.id);
            e.stopPropagation();
        })
    }
}
function agregarManejadorTr(tr){

    if(tr){
        tr.addEventListener('click',function(e){
           // alert(e.target.getAttribute('data-id'));
           alert(e.path[0].dataset.id);
           console.log(e.target);
            
        })
    }
}


 

  localStorage.setItem("timer","tiempo");
  localStorage.setItem("Anuncios",Anuncio);
  
  