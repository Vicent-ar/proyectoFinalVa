var counter=1;
var counter2=1;
var counter3=1;

function uno (){
    
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
var contador=0;
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

window.onload = function(){
    startTime();
    lanzarBanner();
    lanzarBanner2();
    funcioInici();
    formSelect=document.getElementById('formulariocontacto');    formSelect.opc1.addEventListener('change',cambioOpc);
    var icon=document.getElementById('icon');
    icon.onclick=myFunction;
    cambiocolor=document.getElementById('cambiocolor');
    cambiocolor.onclick=uno; 
    var whatis=document.getElementById('whatis');
    whatis.onmouseover=ptoltip;
    var interrog=document.getElementById('interrog');
    interrog.onmouseover=ptoltip2;
}

function cambioOpc(miEvento){
    var elemSelected=miEvento.target.options[miEvento.target.selectedIndex].value;
    var selectDos=miEvento.target.form.opc2;
    
    while(selectDos.length>0){
        selectDos.remove(selectDos.length-1);
    }
    
    if (elemSelected=='1'){
        var opt=document.createElement('option');
        opt.value='1';
        opt.textContent='Álava (Araba)';
        selectDos.appendChild(opt);
        var opt2=document.createElement('option');
        opt2.value='2';
        opt2.textContent='Albacete';
        selectDos.appendChild(opt2);
        var opt3=document.createElement('option');
        opt3.value='3';
        opt3.textContent='Alicante (Alacant)';
        selectDos.appendChild(opt3);
        var opt4=document.createElement('option');
        opt4.value='4';
        opt4.textContent='Almería';
        selectDos.appendChild(opt4);
        var opt5=document.createElement('option');
        opt5.value='5';
        opt5.textContent='Asturias';
        selectDos.appendChild(opt5);
        var opt6=document.createElement('option');
        opt6.value='6';
        opt6.textContent='Ávila';
        selectDos.appendChild(opt6);
        var opt7=document.createElement('option');
        opt7.value='7';
        opt7.textContent='Badajoz';
        selectDos.appendChild(opt7);
        var opt8=document.createElement('option');
        opt8.value='8';
        opt8.textContent='Barcelona';
        selectDos.appendChild(opt8);
        var opt9=document.createElement('option');
        opt9.value='9';
        opt9.textContent='Burgos';
        selectDos.appendChild(opt9);
        var opt10=document.createElement('option');
        opt10.value='10';
        opt10.textContent='Cáceres';
        selectDos.appendChild(opt10);
        var opt11=document.createElement('option');
        opt11.value='11';
        opt11.textContent='Cádiz';
        selectDos.appendChild(opt11);
        var opt12=document.createElement('option');
        opt12.value='12';
        opt12.textContent='Cantabria';
        selectDos.appendChild(opt12);
        var opt13=document.createElement('option');
        opt13.value='13';
        opt13.textContent='Castellón (Castelló)';
        selectDos.appendChild(opt13);
        var opt14=document.createElement('option');
        opt14.value='14';
        opt14.textContent='Ciudad Real';
        selectDos.appendChild(opt14);
        var opt15=document.createElement('option');
        opt15.value='15';
        opt15.textContent='Córdoba';
        selectDos.appendChild(opt15);
        var opt16=document.createElement('option');
        opt16.value='16';
        opt16.textContent='Cuenca';
        selectDos.appendChild(opt16);
        var opt17=document.createElement('option');
        opt17.value='17';
        opt17.textContent='Gerona (Girona)';
        selectDos.appendChild(opt17);
        var opt18=document.createElement('option');
        opt18.value='18';
        opt18.textContent='Granada';
        selectDos.appendChild(opt18);
        var opt19=document.createElement('option');
        opt19.value='19';
        opt19.textContent='Guadalajara';
        selectDos.appendChild(opt19);
        var opt20=document.createElement('option');
        opt20.value='20';
        opt20.textContent='Guipúzcoa (Gipuzkoa)';
        selectDos.appendChild(opt20);
        var opt21=document.createElement('option');
        opt21.value='21';
        opt21.textContent='Huelva';
        selectDos.appendChild(opt21);
        var opt22=document.createElement('option');
        opt22.value='22';
        opt22.textContent='Huesca';
        selectDos.appendChild(opt22);
        var opt23=document.createElement('option');
        opt23.value='23';
        opt23.textContent='Islas Baleares';
        selectDos.appendChild(opt23);
        var opt24=document.createElement('option');
        opt24.value='24';
        opt24.textContent='Jaén';
        selectDos.appendChild(opt24);
        var opt25=document.createElement('option');
        opt25.value='25';
        opt25.textContent='La Coruña (A Coruña)';
        selectDos.appendChild(opt25);
        var opt26=document.createElement('option');
        opt26.value='26';
        opt26.textContent='La Rioja';
        selectDos.appendChild(opt26);
        var opt27=document.createElement('option');
        opt27.value='27';
        opt27.textContent='Las Palmas';
        selectDos.appendChild(opt27);
        var opt28=document.createElement('option');
        opt28.value='28';
        opt28.textContent='León';
        selectDos.appendChild(opt28);
        var opt29=document.createElement('option');
        opt29.value='29';
        opt29.textContent='Lérida (Lleida)';
        selectDos.appendChild(opt29);
        var opt30=document.createElement('option');
        opt30.value='30';
        opt30.textContent='Lugo';
        selectDos.appendChild(opt30);
        var opt31=document.createElement('option');
        opt31.value='31';
        opt31.textContent='Madrid';
        selectDos.appendChild(opt31);
        var opt32=document.createElement('option');
        opt32.value='32';
        opt32.textContent='Málaga';
        selectDos.appendChild(opt32);
        var opt33=document.createElement('option');
        opt33.value='33';
        opt33.textContent='Murcia';
        selectDos.appendChild(opt33);
        var opt34=document.createElement('option');
        opt34.value='34';
        opt34.textContent='Navarra';
        selectDos.appendChild(opt34);
        var opt35=document.createElement('option');
        opt35.value='35';
        opt35.textContent='Orense (Ourense)';
        selectDos.appendChild(opt35);
        var opt36=document.createElement('option');
        opt36.value='36';
        opt36.textContent='Palencia';
        selectDos.appendChild(opt36);
        var opt37=document.createElement('option');
        opt37.value='37';
        opt37.textContent='Pontevedra';
        selectDos.appendChild(opt37);
        var opt38=document.createElement('option');
        opt38.value='38';
        opt38.textContent='Salamanca';
        selectDos.appendChild(opt38);
        var opt39=document.createElement('option');
        opt39.value='39';
        opt39.textContent='Santa Cruz de Tenerife';
        selectDos.appendChild(opt39);
        var opt40=document.createElement('option');
        opt40.value='40';
        opt40.textContent='Segovia';
        selectDos.appendChild(opt40);
        var opt41=document.createElement('option');
        opt41.value='41';
        opt41.textContent='Sevilla';
        selectDos.appendChild(opt41);
        var opt42=document.createElement('option');
        opt42.value='42';
        opt42.textContent='Soria';
        selectDos.appendChild(opt42);
        var opt43=document.createElement('option');
        opt43.value='43';
        opt43.textContent='Tarragona';
        selectDos.appendChild(opt43);
        var opt44=document.createElement('option');
        opt44.value='44';
        opt44.textContent='Teruel';
        selectDos.appendChild(opt44);
        var opt45=document.createElement('option');
        opt45.value='45';
        opt45.textContent='Toledo';
        selectDos.appendChild(opt45);
        var opt46=document.createElement('option');
        opt46.value='46';
        opt46.textContent='Valencia (València)';
        selectDos.appendChild(opt46);
        var opt47=document.createElement('option');
        opt47.value='47';
        opt47.textContent='Valladolid';
        selectDos.appendChild(opt47);
        var opt48=document.createElement('option');
        opt48.value='48';
        opt48.textContent='Vizcaya (Bizkaia)';
        selectDos.appendChild(opt48);
        var opt49=document.createElement('option');
        opt49.value='49';
        opt49.textContent='Zamora';
        selectDos.appendChild(opt49);
        var opt50=document.createElement('option');
        opt50.value='50';
        opt50.textContent='Zaragoza';
        selectDos.appendChild(opt50);
    }else if(elemSelected=='2'){
        var opt=document.createElement('option');
        opt.value='1';
        opt.textContent='Açores';
        selectDos.appendChild(opt);
        var opt2=document.createElement('option');
        opt2.value='2';
        opt2.textContent='Aveiro';
        selectDos.appendChild(opt2);
        var opt3=document.createElement('option');
        opt3.value='3';
        opt3.textContent='Beja';
        selectDos.appendChild(opt3);
        var opt4=document.createElement('option');
        opt4.value='4';
        opt4.textContent='Braga';
        selectDos.appendChild(opt4);
        var opt5=document.createElement('option');
        opt5.value='5';
        opt5.textContent='Bragança';
        selectDos.appendChild(opt5);
        var opt6=document.createElement('option');
        opt6.value='6';
        opt6.textContent='Castelo Branco';
        selectDos.appendChild(opt6);
        var opt7=document.createElement('option');
        opt7.value='7';
        opt7.textContent='Coimbra';
        selectDos.appendChild(opt7);
        var opt8=document.createElement('option');
        opt8.value='8';
        opt8.textContent='Évora';
        selectDos.appendChild(opt8);
        var opt9=document.createElement('option');
        opt9.value='9';
        opt9.textContent='Faro';
        selectDos.appendChild(opt9);
        var opt10=document.createElement('option');
        opt10.value='10';
        opt10.textContent='Guarda';
        selectDos.appendChild(opt10);
        var opt11=document.createElement('option');
        opt11.value='11';
        opt11.textContent='Leiria';
        selectDos.appendChild(opt11);
        var opt12=document.createElement('option');
        opt12.value='12';
        opt12.textContent='Lisboa';
        selectDos.appendChild(opt12);
        var opt13=document.createElement('option');
        opt13.value='13';
        opt13.textContent='Madeira';
        selectDos.appendChild(opt13);
        var opt14=document.createElement('option');
        opt14.value='14';
        opt14.textContent='Portalegre';
        selectDos.appendChild(opt14);
        var opt15=document.createElement('option');
        opt15.value='15';
        opt15.textContent='Oporto';
        selectDos.appendChild(opt15);
        var opt16=document.createElement('option');
        opt16.value='16';
        opt16.textContent='Santarém';
        selectDos.appendChild(opt16);
        var opt17=document.createElement('option');
        opt17.value='17';
        opt17.textContent='Setúbal';
        selectDos.appendChild(opt17);
        var opt18=document.createElement('option');
        opt18.value='18';
        opt18.textContent='Viana do Castelo';
        selectDos.appendChild(opt18);
        var opt19=document.createElement('option');
        opt19.value='19';
        opt19.textContent='Vila Real';
        selectDos.appendChild(opt19);
        var opt20=document.createElement('option');
        opt20.value='20';
        opt20.textContent='Viseu';
        selectDos.appendChild(opt20);
    }else if(elemSelected=='3'){
        var opt=document.createElement('option');
        opt.value='1';
        opt.textContent='Otra';
        selectDos.appendChild(opt);
    }
}

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
function dos(){
       
        var formulario = document.getElementById('formulariocontacto');
        var mynombre=formulario.nombre.value;
        var domicilio=formulario.nombrecalle.value;
        var correo=formulario.correo.value;
        var seleccionado = false;
        var indice = formulario.opc1.selectedIndex; 
        var inform=formulario.familia.selectedIndex;
       
        if(mynombre.length==0||mynombre==null||/^\s+$/.test(mynombre)){
            alert("El campo nombre no puede estar vacio");
            setFocusToTextBox(1);
            return false;
        }else if(domicilio.length==0||domicilio==null){
            alert("El campo dirección no puede estar vacio");
            setFocusToTextBox(2);
            return false;
        }else if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo))||correo.length==0||correo==null) {  
              alert("El campo correo electrónico no puede estar vacio y debe llevar formato");
                setFocusToTextBox(3);    
              return false;
        }else if(indice==null||indice==0){
            alert("Debes elegir un pais");
            return false;
        }else if(inform==null||infrom==0){
            alert("Debes elegir una opcion a la pregunta si te gustan las web....");
            return false;
        }else if( !formulario.aceptar.checked ) { 
        alert("Debe aceptar las condiciones de uso");
        return false; 
        }else{
        formulario.submit();
        return true;
    }
}

function setFocusToTextBox(x){
    
    if (x==1){
    document.getElementById("nombre").focus();
    }
    
    if (x==2){
    document.getElementById("nombrecalle").focus();
    }
    
    if (x==3){
    document.getElementById("correo").focus();
    }
}

function ptoltip(lEsdeveniment){
    var elEvento=lEsdeveniment||window.event;
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

function ptoltip2(lEsdeveniment){
    var elEvento=lEsdeveniment||window.event;
    var elemento = document.getElementById('interrog');
    var posicion = elemento.getBoundingClientRect();    
    var posX=posicion.left;
    var posY=posicion.top;
    var posXround=Math.round(posX);
    var posYround=Math.round(posY);
    var nota=document.createElement("span");
    var textoNota=document.createTextNode("Introduce un formato correcto de correo elecrónico");
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
    nota.style.marginLeft="120px";
    elemento.appendChild(nota);
    setTimeout(outTool,2000,nota);
}

function outTool2(elem){
    elem.style.visibility='hidden';
}

function myFunction() {
    var x = document.getElementById("myTopnav");
  
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
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
 
