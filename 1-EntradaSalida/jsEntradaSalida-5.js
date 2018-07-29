/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var nombre;
    var edad; 
        nombre=document.getElementById("ElNombre").value;
        edad=document.getElementById("LaEdad").value;
    alert("Usted se llama" + nombre + "y tiene" + edad + "años");
    
	
}

