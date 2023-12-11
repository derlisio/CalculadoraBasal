const CALCULAR = document.getElementById('calcular');//boton calcular
const ERROR = document.getElementById('error');//parrafo de error
const FLU = document.getElementById('flu');//parrafo flujo
const MAN = document.getElementById('man');// parrafo mantenimiento
const DIA = document.getElementById('dia');
const HASTA30 = document.getElementById('Hasta30');
const MAS30 = document.getElementById('Mas30');

CALCULAR.addEventListener('click',calculo)

function calculo(){
    let peso = document.getElementById('peso').valueAsNumber;
    if (peso>0){
        if (peso<=30){
            HASTA30.style.display = 'block'
            MAS30.style.display = 'none'
            ERROR.style.display = 'none'
            DIA.innerHTML= 'diario: '+ segar(peso) +' cc'
            DIA.style.display='block'
            FLU.innerHTML= 'mantenimiento: '+ (segar(peso)/24).toFixed(2) +' cc/hr'
            FLU.style.display='block'
            MAN.innerHTML= 'man+man/2: '+ (segar(peso)*1.5) +' cc'
            MAN.style.display='block'
            
    
        }else{
            HASTA30.style.display = 'none'
            MAS30.style.display = 'block'
            ERROR.style.display = 'none'
            DIA.innerHTML= 'SC*1500: '+ ((superficie(peso)*1500).toFixed(2)) +' cc'
            DIA.style.display='block'
            FLU.innerHTML= 'SC*2000: '+ ((superficie(peso)*2000).toFixed(2)) +' cc/hr'
            FLU.style.display='block'
            MAN.style.display = 'none';
            
        
        }

    }else{
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        DIA.style.display='none'
    }
    document.querySelectorAll('.resultado').forEach(function(element) {
        element.classList.add('mostrar');
    });
    document.getElementById('detalle').classList.add('mostrar');


}

function segar(valor){
    if (valor>20){
        return (1500+((valor-20)*20))
    } else if (valor>10){
        return (1000+((valor-20)*50))
    }else{
        return (valor*100)
    }
}

function superficie(valor){
    return ((valor * 4 ) + 7 ) / (valor + 90)

}

document.querySelectorAll('ul li').forEach(function(element) {
    element.classList.add('mostrar');
});

document.getElementById('calculadora').classList.add('mostrar');