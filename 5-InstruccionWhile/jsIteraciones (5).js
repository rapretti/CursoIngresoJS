function mostrar()
{

var sexo = prompt("ingrese f ó m .");

    while (sexo != 'f' && sexo != 'm'){
        sexo=prompt("Error: ingrese sexo 'f' o 'm'");
    }
        
document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN