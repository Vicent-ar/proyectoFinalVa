var contador=0;
var counter2=1;
var counter3=1;
var tiempoEspera=3333;
var longitudArray=3;
var arrayLinks=new Array(longitudArray);
arrayLinks[0]='https://www.decathlon.es/es/';
arrayLinks[1]='https://www.bkie.com/';
arrayLinks[2]='https://www.mtbfestival.es/';

function lanzarBanner(){
    if (contador==arrayLinks.length){
        contador=0;
    }
    var miBanner=document.getElementById('banner');
    document.getElementById('linkBanner').href=arrayLinks[contador];
    contador++;
    setTimeout('lanzarBanner()',tiempoEspera);      
}

var contador2=0;
var tiempoEspera2=3333;
var longitudArray2=3;
var arrayLinks2=new Array(longitudArray2);
arrayLinks2[0]='https://www.javalambre-valdelinares.com/oferta-esqui-45-55-javalambre-valdelinares.html?_ga=2.71060054.754760483.1547224547-572303238.1546515554';
arrayLinks2[1]='https://balneariodemontanejos.com/';
arrayLinks2[2]='https://sportmaniacs.com/es/services/inscription/trail-rascatildea---segorbe';

function lanzarBanner2(){
    if (contador2==arrayLinks2.length){
        contador2=0;
    }
    var miBanner2=document.getElementById('banner2');
    document.getElementById('linkBanner2').href=arrayLinks2[contador2];
    contador2++;
    setTimeout('lanzarBanner2()',tiempoEspera2);   
}

var counter=1;

function startTime() {
    
    var hoy = new Date();
    var hr = hoy.getHours();
    var min = hoy.getMinutes();
    var sec = hoy.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;   
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;    
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var diasSemana = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    var diaSemanaActual = diasSemana[hoy.getDay()];
    var diaActual = hoy.getDate();
    var mesActual = meses[hoy.getMonth()];
    var anyActual = hoy.getFullYear();
    var date = diaSemanaActual+", "+diaActual+" "+mesActual+" "+anyActual;
    document.getElementById("date").innerHTML = date;
    var time = setTimeout(function(){ startTime() }, 500);    
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

window.onload = function(){
    
    startTime();
    lanzarBanner();
    lanzarBanner2();
    funcioInici();
    var whatis=document.getElementById('whatis');
    whatis.onmouseover=ptoltip;
    var icon=document.getElementById('icon');
    icon.onclick=myFunction;
    botonAnyadir.onclick = function uno (){
    document.getElementById('entradas').style.fontSize='25px';
    document.getElementById('entradas').style.fontWeight='bold';
    var fraseCero= document.getElementById('entradas').getElementsByTagName('p')[0];
    var formulario = document.getElementById('miformulario');
    var texto=formulario.textoA.value;
    var nombre=formulario.nombre.value;
    var salto= document.createElement('br');
    
    if(nombre.length==0||nombre==""){
        alert("El campo nombre no puede estar vacio");
        document.getElementById('textN').focus();
        }else if(texto==""||texto.length==0||texto.length>500){
            alert("El campo texto no puede estar vacio, ni puede tener más de 500 caracteres"); 
            document.getElementById('textC').focus();
            }else{
                var fraseNombre = document.createElement('p').appendChild(document.createTextNode(nombre));
                fraseCero= document.getElementById('entradas').getElementsByTagName('p')[0];
                document.getElementById('entradas').insertBefore(fraseNombre,fraseCero);
                var salto2= document.createElement('br');
                fraseCero= document.getElementById('entradas').getElementsByTagName('p')[0];
                document.getElementById('entradas').insertBefore(salto2,fraseCero); 
                var fraseTexto= document.createElement('p').appendChild(document.createTextNode(texto));
                fraseCero = document.getElementById('entradas').getElementsByTagName('p')[0];
                document.getElementById('entradas').insertBefore(fraseTexto,fraseCero);
                var salto3= document.createElement('br');
                fraseCero = document.getElementById('entradas').getElementsByTagName('p')[0];
                document.getElementById('entradas').insertBefore(salto3,fraseCero); 
                var fecha=new Date();
                var fechaHoy=(fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear());
                var fechaPub = document.createElement('p').appendChild(document.createTextNode(fechaHoy));
                fraseCero = document.getElementById('entradas').getElementsByTagName('p')[0];
                document.getElementById('entradas').insertBefore(fechaPub,fraseCero);
                var salto4= document.createElement('br');
                document.getElementById('entradas').insertBefore(salto4,fraseCero);  
                var lineas = document.createElement('p').appendChild(document.createTextNode('-----------------------------------------------------------------------------------------------------------------------------'));
                fraseCero= document.getElementById('entradas').getElementsByTagName('p')[0];
                document.getElementById('entradas').insertBefore(lineas,fraseCero);
                 document.getElementById("miformulario").reset();
                document.getElementById('textN').focus();
                }
            }

cambiocolor.onclick = function dos (){
    
    if(counter%2!=0){
        document.body.style.backgroundColor = "white";
        var a=document.getElementById('foot');
        a.style.backgroundColor="aqua";
        var b=document.getElementById('seccion');
        b.style.backgroundImage = '';
        b.style.background = 'none';
        b.style.backgroundUrl = '';
        b.style.backgroundColor = 'white';      
        counter++;
        }else{
            document.body.style.backgroundColor = 'black';
            var a=document.getElementById('foot');
            a.style.backgroundColor='black';
            var b=document.getElementById('seccion');
            b.style.backgroundImage = "url('images/arena.jpg')";
            b.style.backgroundRepeat='no-repeat';
            b.style.backgroundSize='cover';
            counter++;
            }
        }   
}
   
function ptoltip(lEsdeveniment  ){
    
    var elEvento =lEsdeveniment||window.event;
    var elemento = document.getElementById('whatis');
    var posicion = elemento.getBoundingClientRect();
    var posX=posicion.left;
    var posY=posicion.top;
    var posXround=Math.round(posX);
    var posYround=Math.round(posY);
    var nota=document.createElement("span");
    var textoNota=document.createTextNode("Este botón te permite cambiar el color de fondo del body y del footer");
    nota.appendChild(textoNota);
    nota.style.position="fixed";
    nota.style.top=posYround+"px";
    nota.style.left=posXround+"px"; 
    nota.style.backgroundColor="#FFF";
    nota.style.color="red";
    nota.style.borderStyle="solid";
    nota.style.borderWidth="2px";
    nota.style.borderColor="red";
    nota.style.fontFamily="arial";
    nota.style.fontSize="12px";
    elemento.appendChild(nota);
   
    setTimeout(outTool,2000,nota);
}
function outTool(elem){
    
    elem.style.visibility='hidden';
}

function myFunction(){
    
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    }else{
        x.className = "topnav";
    }
}

function funcionPresionar(onkeypress){
    var clave=event.keyCode;
    
    if (clave==105||clave==73){
        if(counter2%2!=0){
            var lista=document.querySelectorAll('li');
            var lista2=document.querySelectorAll('h1');
            var lista3=document.querySelectorAll('p');
        
            lista.forEach(element => {
                element.style.fontStyle='italic'; 
            });
        
            lista2.forEach(element => {
                element.style.fontStyle='italic'; 
            });
         
            lista3.forEach(element => {
                element.style.fontStyle='italic'; 
            });
        counter2++;
        }else{   
            var lista=document.querySelectorAll('li');
            var lista2=document.querySelectorAll('h1');
            var lista3=document.querySelectorAll('p');
        
            lista.forEach(element => {
                element.style.fontStyle='normal'; 
            });
        
            lista2.forEach(element => {
                element.style.fontStyle='normal'; 
            });
         
            lista3.forEach(element => {
                element.style.fontStyle='normal'; 
            });
            counter2++;
        }
    }
    
    if (clave==98||clave==66){
            
        if(counter3%2!=0){
            var lista=document.querySelectorAll('li');
            var lista2=document.querySelectorAll('h1');
            var lista3=document.querySelectorAll('p');
        
            lista.forEach(element => {
                element.style.fontWeight='bold'; 
            });
        
            lista2.forEach(element => {
                element.style.fontWeight='bold';  
            });
         
            lista3.forEach(element => {
                element.style.fontWeight='bold';  
            });
            counter3++;
        }else{   
            var lista=document.querySelectorAll('li');
            var lista2=document.querySelectorAll('h1');
            var lista3=document.querySelectorAll('p');
        
            lista.forEach(element => {
                element.style.fontWeight='normal'; 
            });
        
            lista2.forEach(element => {
                element.style.fontWeight='normal'; 
            });
         
            lista3.forEach(element => {
                element.style.fontWeight='normal'; 
            });
            counter3++;
        }
    }
}

function funcioInici(){	
document.onkeypress=funcionPresionar;    
}
 
