function mostrar()
{
//tomo la edad  
//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
    var edad;
    edad = document.getElementById("edad").value;
    if (edad < 13){
        alert ("Niño");
    }else if (edad >= 13 && edad <=17){
        alert ("Adolescente");
    }else if (edad > 17){
        alert ("Mayor de edad");
    }



}//FIN DE LA FUNCIÓN