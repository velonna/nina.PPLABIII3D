let autos = 
[{"id":1,"titulo":"Goldie","transaccion":"descripcion","precio":"5","numeroPuertas":"6","numKM":"0","potencia":"7"},
{"id":2,"titulo":"Goldie","transaccion":"descripcion","precio":"6","numeroPuertas":"6","numKM":"5","potencia":"3"},
{"id":3,"titulo":"Goldie","transaccion":"descripcion","precio":"7","numeroPuertas":"6","numKM":"7","potencia":"6"},
{"id":4,"titulo":"Goldie","transaccion":"descripcion","precio":"8","numeroPuertas":"4","numKM":"3","potencia":"6"}];


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

class Anuncio {
    constructor(id, titulo,transaccion,descripcion,precio) {
      this.id = id;
      this.titulo = titulo;
      this.transaccion = transaccion;
      this.descripcion = descripcion;
      this.precio = precio;
      
    }
    agregar() {
        console.log("un anuncio");
    }
  }
  class Anuncio_Auto extends Anuncio {
   
  }

  localStorage.setItem("timer","tiempo");
  localStorage.setItem("Anuncios",Anuncio_Auto);
  
  