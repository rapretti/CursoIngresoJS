function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		while(true){
			numero = prompt("Ingrese un número y para finalizar ingrese si");
			if(bandera){
				bandera = false;
				max = numero;
				min = numero;
			}
			if(numero == "si"){
				break;
			}
			contador++;
			numero = parseInt(numero);
			if(numero > max){
				max = numero;
			}else if(numero < min){
				min = numero;
			}
		}
	
	}




}//FIN DE LA FUNCIÓN