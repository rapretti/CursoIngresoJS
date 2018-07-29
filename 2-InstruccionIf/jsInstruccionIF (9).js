function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	//Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive

		var numero;
		numero = document.getElementById("Numero");
			numero = parseInt(Math.random () * (11 - 1) + 1 );
				alert (numero);
}//FIN DE LA FUNCIÓN