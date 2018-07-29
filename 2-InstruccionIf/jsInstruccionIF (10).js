function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	//Al presionar el Botón, asignar una nota RANDOM al examen y mostrar: "EXCELENTE" para notas igual a 9 o 10, "APROBÓ" para notas mayores a 4, "Vamos, la proxima se puede" para notas menores a 4

		var nota;
		nota = document.getElementById("Nota");
			nota=parseInt(Math.random()*(11-1)+1);
				if(nota >8 && nota <=10){
					alert ("EXCELENTE");
				}else if (nota > 3){
					alert ("APROBO");
				}else if (nota < 4){
					alert ("Vamos la proxima se puede");
				}
}//FIN DE LA FUNCIÓN